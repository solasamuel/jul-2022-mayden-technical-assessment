import { ADD_TO_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST, CLEAR_SHOPPING_LIST } from '../constants/shoppingListConstants'

export const shoppingListReducer = (state = { itemsToBuy: [], boughtItems: [] }, action) => {
    switch (action.type) {

        case ADD_TO_SHOPPING_LIST:
            const item = action.payload

            const itemExists = state.itemsToBuy.find(i => i.tpnb === item.tpnb)

            if (itemExists) {
                return {
                    ...state,
                    itemsToBuy: state.itemsToBuy.map(i => i.tpnb === itemExists.tpnb ? item : i)
                }
            } else {
                return {
                    ...state,
                    itemsToBuy: [...state.itemsToBuy, item]
                }
            }

        case REMOVE_FROM_SHOPPING_LIST:
            return {
                ...state,
                itemsToBuy: state.itemsToBuy.filter(i => i.tpnb !== action.payload)
            }

        case CLEAR_SHOPPING_LIST:
            return {
                ...state,
                shoppingList: []
            }
        
        default:
            return state
    }
}