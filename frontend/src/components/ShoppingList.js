import React, { Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { useDispatch, useSelector } from 'react-redux';
import { } from '../actions/shoppingListActions';

const ShoppingList = () => {

    const { loading, itemsToBuy, boughtItems, error } = useSelector(state => state.shoppingList)

    return (
        <Fragment>
            <div className='constainer-fluid'>
                <h3 className="text-center">SHOPPING LIST</h3>

                <h3 className="text-center">SPENDING LIMIT: £25</h3>

                <section id="shoppingList" className='container my-5' >
                    {itemsToBuy.length === 0 ? <h2>Your Cart is Empty</h2> : (
                        <Fragment>
                            {itemsToBuy.map(item => (
                                <Fragment>
                                    <div className='container d-flex justify-content-between align-items-center'>
                                        <div className='card p-1 rounded my-2 col-7'>
                                            <p>{item.name}</p>
                                            <p>£{item.price}</p>
                                        </div>

                                        <div className="col-1 d-flex d-inline">
                                            <span className="btn btn-dark minus">-</span>

                                            <p className={`count-${item.tpnb} d-inline px-3 mt-1`} >{item.quantity}</p>

                                            <span className="btn btn-dark plus" >+</span>
                                        </div>

                                        <div className='col-1'>
                                            <button className="btn btn-dark" >
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                        </Fragment>
                    )}
                </section>

                <h3 className="text-center">BOUGHT ITEMS</h3>

                <section id="boughtItems" className='container my-5' >
                    {/* {groceries && groceries.map(item => (
                        <div className='container d-flex justify-content-between align-items-center'>
                            <div className='card p-3 rounded my-2 col-10'>
                                <p>{item.name}</p>
                                <p>£{item.price}</p>
                            </div>
                            <button className="col-1 h-50" onClick={addToShoppingList(item)}>
                                +
                            </button>
                        </div>
                    ))} */}
                </section>


            </div>
        </Fragment>
    )
}

export default ShoppingList