import { combineReducers } from 'redux'
import types from './types'

const initialState = {
    gists: null,
    isFetching: false,
    user: '',
};

function app(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GIST_START:
        return {...state, isFetching: true};
    case types.FETCH_GIST_SUCCESS: {
        return {...state, gists: action.payload, isFetching: false};
    }
    case types.SET_USER: {
        return {...state, user: action.payload}
    }
    default:
      return state
  }
}

export default app;