import React, { Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { useDispatch, useSelector } from 'react-redux';
import { addItemToShoppingList, removeItemFromShoppingList } from '../actions/shoppingListActions';

const ShoppingList = () => {

    const dispatch = useDispatch();

    const { loading, itemsToBuy, boughtItems, error } = useSelector(state => state.shoppingList)

    const increaseQty = (item) => {

        const newQty = item.quantity + 1

        dispatch(addItemToShoppingList(item, newQty)) // changing item already in the shopping list

    }

    const decreaseQty = (item) => {

        const newQty = item.quantity - 1
        if (newQty <= 0) return

        dispatch(addItemToShoppingList(item, newQty)) // changing item already in the shopping list
    }

    const removeShoppingListItemHandler = (tpnb) => {
        dispatch(removeItemFromShoppingList(tpnb));
        toast.success('Item removed from shopping list')
    }


    return (
        <Fragment>
            <div className='constainer-fluid'>
                <h3 className="text-center">SHOPPING LIST</h3>

                <h3 className="text-center">SPENDING LIMIT: £25</h3>

                <section id="shoppingList" className='container my-5' >
                    {itemsToBuy.length === 0 ? <h2>YOUR SHOPPING LIST IS EMPTY</h2> : (
                        <Fragment>
                            {itemsToBuy.map(item => (
                                <Fragment key={item.tpnb}>
                                    <div className='container d-flex justify-content-between align-items-center'>
                                        <div className='card p-1 rounded my-2 col-7'>
                                            <p>{item.name}</p>
                                            <p>£{item.price}</p>
                                        </div>

                                        <div className="col-1 d-flex d-inline">
                                            <span className="btn btn-dark minus" onClick={() => decreaseQty(item)}>-</span>

                                            <p className={`count-${item.tpnb} d-inline px-3 mt-1`} >{item.quantity}</p>

                                            <span className="btn btn-dark plus" onClick={() => increaseQty(item)}>+</span>
                                        </div>

                                        <div className='col-1'>
                                            <button className="btn btn-dark" onClick={() => removeShoppingListItemHandler(item.tpnb)}>
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                        </Fragment>
                    )}
                </section>

                <h3 className="text-center">SHOPPING LIST TOTAL: £{itemsToBuy.reduce((accumulator, object) => {
                    return accumulator + object.price * object.quantity;
                }, 0)}</h3>

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