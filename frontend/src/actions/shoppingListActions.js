import { axios } from "axios";
import { ADD_TO_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST } from '../constants/shoppingListConstants'

export const addItemToShoppingList = (item, quantity) => async (dispatch, getState) => {

    dispatch({
        type: ADD_TO_SHOPPING_LIST,
        payload: {
            ...item,
            quantity: quantity
        }
    })

    localStorage.setItem('itemsToBuy', JSON.stringify(getState().shoppingList.itemsToBuy))
}

export const removeItemFromShoppingList = (tpnb) => async (dispatch, getState) => {
    
    dispatch({
        type: REMOVE_FROM_SHOPPING_LIST,
        payload: tpnb
    })

    localStorage.setItem('itemsToBuy', JSON.stringify(getState().shoppingList.itemsToBuy))
}