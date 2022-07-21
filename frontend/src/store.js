import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { groceriesReducer } from './reducers/groceryReducers'

const reducer = combineReducers({
    groceries: groceriesReducer,
})

let initialState = {
    shopperData: {
        shoppingList: localStorage.getItem('shoppingList')
            ? JSON.parse(localStorage.getItem('shoppingList'))
            : [],
        boughtItems: localStorage.getItem('boughtItems')
            ? JSON.parse(localStorage.getItem('boughtItems'))
            : [],
    }
}

const middlware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store