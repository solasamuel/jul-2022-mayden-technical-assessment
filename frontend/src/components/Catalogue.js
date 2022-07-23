import React, { Fragment, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'

import { useDispatch, useSelector } from 'react-redux';
import { getGroceries } from '../actions/groceryActions';

import Grocery from './Grocery';

const Catalogue = () => {

    const dispatch = useDispatch();

    const { loading, groceries, error } = useSelector(state => state.groceries)

    useEffect(() => {
        dispatch(getGroceries());
    }, [dispatch])

    return (
        <Fragment>
            <div className='constainer-fluid'>
                <h3 className="text-center">GROCERY CATALOGUE</h3>

                <h3 className="text-center">SPENDING LIMIT: £25</h3>

                <section id="groceries" className='container my-5' >
                    {groceries && groceries.map(item => (
                        <Grocery key={item.tpnb} item={item} />
                    ))}
                </section>

                
            </div>
        </Fragment>
    )
}

export default Catalogue