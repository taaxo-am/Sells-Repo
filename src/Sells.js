import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import img from './img.png'
import avatar from './avatar.png';

const data = [
    {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    },
    {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    },
    {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getTime()
    },
    {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }, {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }, {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }, {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }, {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }, {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }, {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }, {
        'id': 9,
        'img': img,
        'name': 'iPhone 6 plus',
        'qty': 50,
        'stock': 'Out',
        'price': 999.99,
        'category': 'Smartphone',
        'brand': 'Apple',
        'date': new Date().getDate()
    }
]

const Sells = () => {
    return (
        <div className='container-fluid bg-light p-0'>
            <div className='d-flex flex-column justify-content-center w-100 h-100 m-0 p-0'>
                <nav className='navbar sticky-top navbar-dark text-light bg-dark shadow-sm'>
                    <p className='navbar-brand m-2 mx-5'><i className='mx-4 fa fa-home'/>Sells Dashboard</p>
                    <div className='d-flex flex-grow-1 justify-content-end align-items-center mr-2'>
                        <div className='d-md-flex align-items-center d-none'>
                            <span className='username'>Nuradiin</span>
                        </div>

                        <div className='dropdown dropleft mx-3'>
                            <i id='dropdownMenuButton' className='more lightHover fa fa-chevron-down mr-4 ml-4'
                               data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a href='#' className="dropdown-item" type="button">Logout</a>
                            </div>
                        </div>

                        <img className='border h-50 border-primary rounded-circle me-4' src={avatar} alt=""/>
                    </div>
                </nav>
                <div className='d-flex justify-content-between m-4'>
                    <div className='form-inline w-50'>
                        <select className='form-control' value='0'>
                            <option value='0'>All Categories</option>
                        </select>
                        <select className='form-control ml-4' value='0'>
                            <option value='0'>All Stocks</option>
                        </select>
                    </div>
                    <div className='form-inline w-50 justify-content-end'>
                        <input className='form-control' placeholder='Search...'/>
                        <input className='btn btn-dark ml-4' type='submit' value='Search'/>
                    </div>
                </div>

                <div className='card h-75 p-0 ml-4 mr-4'>
                    <table className='table table-borderless table-hover'>
                        <thead className='card-header text-center'>
                        {
                            ['#', 'Image', 'Name', 'Qty', 'Stock', 'Price', 'Category', 'Brand', 'Date'].map(col => {
                                return (
                                    <th>{col}</th>
                                )
                            })
                        }
                        </thead>
                        <tbody>
                        {
                            data.map(obj => {
                                const keys = Object.keys(obj)
                                return (
                                    <tr key={obj.id}>
                                        {
                                            keys.map(key => {
                                                if (key !== keys[0] || key !== keys[1])
                                                    if (key === keys[1])
                                                        return (
                                                            <td key={key} className='border text-center'>
                                                                <img className='h-50' src={obj[key]}/>
                                                            </td>
                                                        );
                                                    else
                                                        return (
                                                            <td key={key} className='border'>
                                                                <p className='text-center'>{obj[key]}</p>
                                                            </td>
                                                        )
                                            })
                                        }
                                    </tr>
                                )
                            })

                        }
                        </tbody>
                    </table>
                </div>

                <nav className='m-4 d-flex justify-content-center' aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                        <li className="page-item"><a className="page-link" href="#">7</a></li>
                        <li className="page-item"><a className="page-link" href="#">8</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sells;
