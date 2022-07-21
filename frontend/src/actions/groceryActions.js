import axios from 'axios'

import {
    CATALOGUE_GROCERIES_FAIL,
    CATALOGUE_GROCERIES_REQUEST,
    CATALOGUE_GROCERIES_SUCCESS,
    CLEAR_ERRORS
} from '../constants/groceryConstants'

export const getGroceries = () => async (dispatch) => {
    try {

        dispatch({ type: CATALOGUE_GROCERIES_REQUEST })

        const { data } = await axios.get('/api/v1/groceries')

        dispatch({
            type: CATALOGUE_GROCERIES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATALOGUE_GROCERIES_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}