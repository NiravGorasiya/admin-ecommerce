import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import Sidebar from './commonComponent/Sidebar';
import Header from './commonComponent/Header';


const Dashboard = () => {
    useEffect(() => {
        // Sale statistics Chart
        const initCharts = () => {
            if (document.getElementById('myChart')) {
                const canvas1 = document.getElementById('myChart') as HTMLCanvasElement;
                if (canvas1 && Chart.getChart(canvas1)) {
                    Chart.getChart(canvas1)?.destroy();
                }
                const ctx = canvas1.getContext('2d');
                if (ctx) {
                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [
                                {
                                    label: 'Sales',
                                    tension: 0.3,
                                    fill: true,
                                    backgroundColor: 'rgba(44, 120, 220, 0.2)',
                                    borderColor: 'rgba(44, 120, 220)',
                                    data: [18, 17, 4, 3, 2, 20, 25, 31, 25, 22, 20, 9],
                                },
                                {
                                    label: 'Visitors',
                                    tension: 0.3,
                                    fill: true,
                                    backgroundColor: 'rgba(4, 209, 130, 0.2)',
                                    borderColor: 'rgb(4, 209, 130)',
                                    data: [40, 20, 17, 9, 23, 35, 39, 30, 34, 25, 27, 17],
                                },
                                {
                                    label: 'Products',
                                    tension: 0.3,
                                    fill: true,
                                    backgroundColor: 'rgba(380, 200, 230, 0.2)',
                                    borderColor: 'rgb(380, 200, 230)',
                                    data: [30, 10, 27, 19, 33, 15, 19, 20, 24, 15, 37, 6],
                                },
                            ],
                        },
                        options: {
                            plugins: {
                                legend: {
                                    labels: {
                                        usePointStyle: true,
                                    },
                                },
                            },
                        },
                    });
                }
            }

            if (document.getElementById('myChart2')) {
                const canvas2 = document.getElementById('myChart2') as HTMLCanvasElement;
                if (canvas2 && Chart.getChart(canvas2)) {
                    Chart.getChart(canvas2)?.destroy();
                }
                const ctx = canvas2.getContext('2d');
                if (ctx) {
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['900', '1200', '1400', '1600'],
                            datasets: [
                                {
                                    label: 'US',
                                    backgroundColor: '#5897fb',
                                    barThickness: 10,
                                    data: [233, 321, 783, 900],
                                },
                                {
                                    label: 'Europe',
                                    backgroundColor: '#7bcf86',
                                    barThickness: 10,
                                    data: [408, 547, 675, 734],
                                },
                                {
                                    label: 'Asian',
                                    backgroundColor: '#ff9076',
                                    barThickness: 10,
                                    data: [208, 447, 575, 634],
                                },
                                {
                                    label: 'Africa',
                                    backgroundColor: '#d595e5',
                                    barThickness: 10,
                                    data: [123, 345, 122, 302],
                                },
                            ],
                        },
                        options: {
                            plugins: {
                                legend: {
                                    labels: {
                                        usePointStyle: true,
                                    },
                                },
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        },
                    });
                }
            }
        };

        initCharts();
    }, []);

    return (
        <>
            <Sidebar />
            <div className="main-wrap">
                <Header />
                <section className="content-main">
                    <div className="content-header">
                        <div>
                            <h2 className="content-title">Dashboard</h2>
                            <p>Whole data about your business here</p>
                        </div>
                        <div>
                            <button className="btn btn-primary" style={{ display: "flex" }}>
                                <i className="material-icons">post_add</i> Create report
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="card mb-4">
                                <article className="card-body">
                                    <h5 className="card-title">Sale statistics</h5>
                                    <canvas id="myChart" height="120px"></canvas>
                                </article>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="card mb-4">
                                        <article className="card-body">
                                            <h5 className="card-title">New Members</h5>
                                            <div className="new-member-list">
                                                {['Patric Adams', 'Dilan Specter', 'Tomas Baker'].map((name, index) => (
                                                    <div className="d-flex align-items-center justify-content-between mb-4" key={index}>
                                                        <div className="d-flex align-items-center">
                                                            <img src={`assets/imgs/people/avatar${index + 1}.jpg`} alt="" className="avatar" />
                                                            <div>
                                                                <h6>{name}</h6>
                                                                <p className="text-muted font-xs">Sanfrancisco</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="btn btn-xs">
                                                            <i className="material-icons md-add"></i> Add
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="card mb-4">
                                        <article className="card-body">
                                            <h5 className="card-title">Recent activities</h5>
                                            <ul className="verti-timeline list-unstyled font-sm">
                                                {[
                                                    { date: 'Today', description: 'Lorem ipsum dolor sit amet consectetur', isActive: false },
                                                    { date: '17 May', description: 'Debitis nesciunt voluptatum dicta reprehenderit', isActive: true },
                                                    { date: '13 May', description: 'Accusamus voluptatibus voluptas.', isActive: false },
                                                    { date: '05 April', description: 'At vero eos et accusamus et iusto odio dignissi', isActive: false },
                                                    { date: '26 Mar', description: 'Responded to need “Volunteer Activities', isActive: false },
                                                ].map((event, index) => (
                                                    <li className={`event-list ${event.isActive ? 'active' : ''}`} key={index}>
                                                        <div className="event-timeline-dot">
                                                            <i className={`material-icons md-play_circle_outline font-xxl ${event.isActive ? 'animation-fade-right' : ''}`}></i>
                                                        </div>
                                                        <div className="media">
                                                            <div className="me-3">
                                                                <h6>
                                                                    <span>{event.date}</span>{' '}
                                                                    <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                                                                </h6>
                                                            </div>
                                                            <div className="media-body">
                                                                <div>{event.description}</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card mb-4">
                                <article className="card-body">
                                    <h5 className="card-title">Revenue Base on Area</h5>
                                    <canvas id="myChart2" height="217"></canvas>
                                </article>
                            </div>
                            <div className="card mb-4">
                                <article className="card-body">
                                    <h5 className="card-title">Marketing Channel</h5>
                                    {[
                                        { platform: 'Facebook', progress: 15 },
                                        { platform: 'Instagram', progress: 65 },
                                        { platform: 'Google', progress: 51 },
                                        { platform: 'Twitter', progress: 80 },
                                        { platform: 'Other', progress: 80 },
                                    ].map((channel, index) => (
                                        <div key={index}>
                                            <span className="text-muted font-xs">{channel.platform}</span>
                                            <div className="progress mb-3">
                                                <div className="progress-bar" role="progressbar" style={{ width: `${channel.progress}%` }}>
                                                    {channel.progress}%
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Revenue */}
                        <div className="col-lg-3">
                            <div className="card card-body mb-4">
                                <div className="icontext">
                                    <span className="icon">
                                        <i className="material-icons text-primary" style={{
                                            backgroundColor: "#cde6e4",
                                            padding: "10px",
                                            borderRadius: "50%",
                                        }}>monetization_on</i>
                                    </span>
                                    <div className="text">
                                        <h6 className="card-title">Revenue</h6>
                                        <span>$13,456.5</span>
                                        <span className="text-sm">Shipping fees are not included</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Orders */}
                        <div className="col-lg-3">
                            <div className="card card-body mb-4">
                                <div className="icontext">
                                    <span className="icon">
                                        <i className="material-icons text-success" style={{
                                            backgroundColor: "#ccf0d0",
                                            padding: "10px",
                                            borderRadius: "50%",
                                        }}>local_shipping
                                        </i>
                                    </span>
                                    <div className="text">
                                        <h6 className="card-title">Orders</h6>
                                        <span>53,668</span>
                                        <span className="text-sm">Excluding orders in transit</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="col-lg-3">
                            <div className="card card-body mb-4">
                                <div className="icontext">
                                    <span className="icon">
                                        <i className="material-icons text-warning" style={{
                                            backgroundColor: "#ffe8d0",
                                            padding: "10px",
                                            borderRadius: "50%",
                                        }}>qr_code</i>
                                    </span>
                                    <div className="text">
                                        <h6 className="card-title">Products</h6>
                                        <span>9,856</span>
                                        <span className="text-sm">In 19 Categories</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Earning */}
                        <div className="col-lg-3">
                            <div className="card card-body mb-4">
                                <div className="icontext">
                                    <span className="icon">
                                        <i className="material-icons text-info" style={{
                                            backgroundColor: "#cef5e8",
                                            padding: "10px",
                                            borderRadius: "50%",
                                        }}>shopping_basket</i>
                                    </span>
                                    <div className="text">
                                        <h6 className="card-title">Monthly Earning</h6>
                                        <span>$6,982</span>
                                        <span className="text-sm">Based on your local time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-4">
                        <header className="card-header">
                            <h4 className="card-title">Latest orders</h4>
                            <div className="row align-items-center">
                                <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                                    <div className="custom_select">
                                        <select className="form-select select-nice">
                                            <option selected>All Categories</option>
                                            <option>Women's Clothing</option>
                                            <option>Men's Clothing</option>
                                            <option>Cellphones</option>
                                            <option>Computer & Office</option>
                                            <option>Consumer Electronics</option>
                                            <option>Jewelry & Accessories</option>
                                            <option>Home & Garden</option>
                                            <option>Luggage & Bags</option>
                                            <option>Shoes</option>
                                            <option>Mother & Kids</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2 col-6">
                                    <input type="date" defaultValue="02.05.2022" className="form-control" />
                                </div>
                                <div className="col-md-2 col-6">
                                    <div className="custom_select">
                                        <select className="form-select select-nice">
                                            <option selected>Status</option>
                                            <option>All</option>
                                            <option>Paid</option>
                                            <option>Chargeback</option>
                                            <option>Refund</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table align-middle table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" className="text-center">
                                                <div className="form-check align-middle">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck01" />
                                                    <label className="form-check-label" htmlFor="transactionCheck01"></label>
                                                </div>
                                            </th>
                                            <th className="align-middle" scope="col">Order ID</th>
                                            <th className="align-middle" scope="col">Billing Name</th>
                                            <th className="align-middle" scope="col">Date</th>
                                            <th className="align-middle" scope="col">Total</th>
                                            <th className="align-middle" scope="col">Payment Status</th>
                                            <th className="align-middle" scope="col">Payment Method</th>
                                            <th className="align-middle" scope="col">View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                                                    <label className="form-check-label" htmlFor="transactionCheck02"></label>
                                                </div>
                                            </td>
                                            <td><a href="#" className="fw-bold">#SK2540</a></td>
                                            <td>Neal Matthews</td>
                                            <td>07 Oct, 2022</td>
                                            <td>$400</td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success">Paid</span>
                                            </td>
                                            <td>
                                                <i className="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard
                                            </td>
                                            <td>
                                                <a href="#" className="btn btn-xs">View details</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-area mt-30 mb-50">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-start">
                                <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                <li className="page-item"><a className="page-link" href="#">02</a></li>
                                <li className="page-item"><a className="page-link" href="#">03</a></li>
                                <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#">16</a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="material-icons md-chevron_right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;
