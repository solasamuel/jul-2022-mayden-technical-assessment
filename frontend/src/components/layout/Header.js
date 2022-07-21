import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fragment>
            <div className="p-4 d-flex justify-content-between">
                <Link to='/'>
                    <div>
                        <img width='50' src="./images/catalogue-icon.png" alt='Catalogue' />
                    </div>
                </Link>
                <h1 className='mt-2' >HEALTHCARE COMPANY</h1>
                <Link to='/shopping-list'>
                    <div>
                        <img width='50' src="./images/cart-icon.png" alt='Shopping List' />
                    </div>

                </Link>
            </div>
        </Fragment>
    )
}

export default Header