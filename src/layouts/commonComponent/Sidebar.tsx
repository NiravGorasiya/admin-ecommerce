import React, { useState } from "react";

// Define types for menu items
interface SubMenuItem {
  title: string;
  link: string;
  active?: boolean; // active is optional
}

interface MenuItem {
  title: string;
  icon: string;
  link: string;
  active?: boolean; // active is optional
  disabled?: boolean;
  submenu?: SubMenuItem[]; // Submenu is optional
}

const Sidebar: React.FC = () => {
  // State to track the currently active submenu
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Define the menu items
  const menuItems: MenuItem[] = [
    { title: "Dashboard", icon: "home", link: "#", active: true },
    {
      title: "Products",
      icon: "shopping_bag",
      link: "#",
      active: false,
      submenu: [
        { title: "Product List", link: "#", active: true },
        { title: "Product Grid", link: "#" },
        { title: "Product Grid 2", link: "#" },
        { title: "Categories", link: "#" },
      ],
    },
    {
      title: "Orders",
      icon: "shopping_cart",
      link: "#",
      submenu: [
        { title: "Order List 1", link: "#" },
        { title: "Order List 2", link: "#" },
        { title: "Order Detail", link: "#" },
        { title: "Order Tracking", link: "#" },
        { title: "Invoice", link: "#" },
      ],
    },
    {
      title: "Sellers",
      icon: "store",
      link: "#",
      submenu: [
        { title: "Sellers Cards", link: "#" },
        { title: "Sellers List", link: "#" },
        { title: "Seller Profile", link: "#" },
      ],
    },
    {
      title: "Add Product",
      icon: "add_box",
      link: "#",
      submenu: [
        { title: "Add Product 1", link: "#" },
        { title: "Add Product 2", link: "#" },
        { title: "Add Product 3", link: "#" },
        { title: "Add Product 4", link: "#" },
      ],
    },
    {
      title: "Transactions",
      icon: "monetization_on",
      link: "#",
      submenu: [
        { title: "Transaction 1", link: "#" },
        { title: "Transaction 2", link: "#" },
        { title: "Transaction Details", link: "#" },
      ],
    },
    {
      title: "Account",
      icon: "person",
      link: "#",
      submenu: [
        { title: "User Login", link: "#" },
        { title: "User Registration", link: "#" },
        { title: "Error 404", link: "#" },
      ],
    },
    { title: "Reviews", icon: "comment", link: "#" },
    { title: "Brands", icon: "stars", link: "#" },
    { title: "Statistics", icon: "pie_chart", link: "#", disabled: true },
    {
      title: "Settings",
      icon: "settings",
      link: "#",
      submenu: [
        { title: "Setting Sample 1", link: "#" },
        { title: "Setting Sample 2", link: "#" },
      ],
    },
    { title: "Starter Page", icon: "local_offer", link: "#" },
  ];

  // Function to toggle the active submenu
  const handleSubMenuToggle = (menuTitle: string) => {
    if (activeSubMenu === menuTitle) {
      setActiveSubMenu(null); // Deactivate the submenu if it's already open
    } else {
      setActiveSubMenu(menuTitle); // Set the clicked submenu as active
    }
  };

  return (
    <aside className="navbar-aside sidebar-component" id="offcanvas_aside">
      <div className="aside-top">
        <a href="#" className="brand-wrap">
          <img
            src="assets/imgs/theme/logo.svg"
            className="logo"
            alt="Evara Dashboard"
          />
        </a>
        <div>
          <button className="btn btn-icon btn-aside-minimize">
            <i className="text-muted material-icons">menu_open</i>
          </button>
        </div>
      </div>
      <nav>
        <ul className="menu-aside">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${item.active ? "active" : ""} ${
                item.submenu ? "has-submenu" : ""
              } ${item.disabled ? "disabled" : ""}`}
            >
              <a
                className="menu-link" style={{display:'flex'}}
                href={item.disabled ? undefined : item.link}
                onClick={(e) => {
                  if (item.disabled) e.preventDefault(); // Prevent click for disabled items
                  else item.submenu && handleSubMenuToggle(item.title); // Toggle submenu on click
                }}
              >
                <i className="icon material-icons">{item.icon}</i>
                <span className="text">{item.title}</span>
              </a>
              {item.submenu && (
                <div
                  className={`submenu${
                    activeSubMenu === item.title ? " active" : ""
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className={subItem.active ? "active" : ""}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
