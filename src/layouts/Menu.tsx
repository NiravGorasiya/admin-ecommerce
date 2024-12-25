import React, { useState } from 'react';
import { Nav, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';


interface SubMenuItem {
    title: string;
    link: string;
    active?: boolean;
}

interface MenuItem {
    title: string;
    link?: string;
    icon: string;
    active?: boolean;
    disabled?: boolean;
    submenu?: SubMenuItem[];
}

interface MenuComponentProps {
    menuItems: MenuItem[];
}

const Menu: React.FC<MenuComponentProps> = ({ menuItems }) => {
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    const handleSubMenuToggle = (menuTitle: string) => {
        if (activeSubMenu === menuTitle) {
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(menuTitle);
        }
    };
    return (
        <nav>
            <ul className="menu-aside">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`menu-item ${item.active ? "active" : ""} ${item.submenu ? "has-submenu" : ""} ${item.disabled ? "disabled" : ""}`}
                    >
                        <Link
                            className="menu-link"
                            to={item.submenu ? '#' : item.disabled ? '#' : item.link || '#'}
                            onClick={(e) => {
                                if (item.disabled) e.preventDefault();
                                else if (item.submenu) handleSubMenuToggle(item.title);
                            }}
                        >
                            <i className="icon material-icons">{item.icon}</i>
                            <span className="text">{item.title}</span>
                        </Link>
                        {item.submenu && (
                            <div
                                className={`submenu${activeSubMenu === item.title ? " active" : ""}`}
                            >
                                {item.submenu.map((subItem, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        to={subItem.link}
                                        className={subItem.active ? "active" : ""}
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Menu