import { axios } from "axios";
import { ADD_TO_SHOPPING_LIST } from '../constants/shoppingListConstants'

export const addItemToShoppingList = (item, quantity) => async (dispatch, getState) => {

    dispatch({
        type: ADD_TO_SHOPPING_LIST,
        payload: {
            quantity: quantity,
            ...item
        }
    })

    localStorage.setItem('itemsToBuy', JSON.stringify(getState().shoppingList.itemsToBuy))
}