import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { groceriesReducer } from './reducers/groceryReducers';
import { shoppingListReducer } from './reducers/shoppingListReducer';

const reducer = combineReducers({
    groceries: groceriesReducer,
    shoppingList: shoppingListReducer,
})

let initialState = {
    shoppingList: {
        itemsToBuy: localStorage.getItem('itemsToBuy')
            ? JSON.parse(localStorage.getItem('itemsToBuy'))
            : [],
        boughtItems: localStorage.getItem('boughtItems')
            ? JSON.parse(localStorage.getItem('boughtItems'))
            : [],
    }
}

const middlware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store