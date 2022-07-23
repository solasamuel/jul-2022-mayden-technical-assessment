import React, { Fragment, useEffect, useState } from 'react';

import { addItemToShoppingList } from '../actions/shoppingListActions';

import { ToastContainer, toast } from 'react-toastify'

import { useDispatch, useSelector } from 'react-redux';

const Grocery = ({ item }) => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();


    const increaseQty = () => {
        const count = document.querySelector(`.count-${item.tpnb}`).textContent;

        const qty = parseInt(count) + 1;

        setQuantity(qty);
    }

    const decreaseQty = () => {
        const count = document.querySelector(`.count-${item.tpnb}`).textContent;

        if (parseInt(count) <= 0) return;

        const qty = parseInt(count) + 1;

        setQuantity(qty);
    }

    const handleAddToShoppingList = () => {
        // console.log(item.name);
        dispatch(addItemToShoppingList(item, quantity)); // not changing an item already existing in the shopping list
        toast.success("Item added to shopping list");
    }

    return (
        <Fragment>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='card p-1 rounded my-2 col-7'>
                    <p>{item.name}</p>
                    <p>£{item.price}</p>
                </div>

                <div className="col-1 d-flex d-inline">
                    <span className="btn btn-dark minus" onClick={decreaseQty}>-</span>

                    <p className={`count-${item.tpnb} d-inline px-3 mt-1`} >{quantity}</p>

                    <span className="btn btn-dark plus" onClick={increaseQty}>+</span>
                </div>

                <div className='col-1'>
                    <button className="btn btn-dark" onClick={handleAddToShoppingList}>
                        ADD
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Grocery