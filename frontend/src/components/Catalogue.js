import React, { Fragment, useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { getGroceries } from '../actions/groceryActions'

const Catalogue = () => {

    const dispatch = useDispatch();

    const { loading, groceries, error } = useSelector(state => state.groceries)

    useEffect(() => {
        dispatch(getGroceries());
    }, [dispatch])

    const addToShoppingList = (item) => {
        
    }

    return (
        <Fragment>
            <div className='constainer-fluid'>
                <h3 className="text-center">GROCERY CATALOGUE</h3>

                <h3 className="text-center">SPENDING LIMIT: £25</h3>

                <section id="groceries" className='container my-5' >
                    {groceries && groceries.map(item => (
                        <div className='container d-flex justify-content-between align-items-center'>
                            <div className='card p-3 rounded my-2 col-10'>
                                <p>{item.name}</p>
                                <p>£{item.price}</p>
                            </div>
                            <button className="col-1 h-50" onClick={addToShoppingList(item)}>
                                +
                            </button>
                        </div>
                    ))}
                </section>

                
            </div>
        </Fragment>
    )
}

export default Catalogue