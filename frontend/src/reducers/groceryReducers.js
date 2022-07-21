import {
    CATALOGUE_GROCERIES_FAIL,
    CATALOGUE_GROCERIES_REQUEST,
    CATALOGUE_GROCERIES_SUCCESS,
    CLEAR_ERRORS
} from '../constants/groceryConstants'

export const groceriesReducer = (state = { groceries: [] }, action) => {
    switch (action.type) {
        case CATALOGUE_GROCERIES_REQUEST:
            return {
                loading: true,
                groceries: []
            }

        case CATALOGUE_GROCERIES_SUCCESS:
            return {
                loading: false,
                groceries: action.payload.groceries,
            }

        case CATALOGUE_GROCERIES_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
}