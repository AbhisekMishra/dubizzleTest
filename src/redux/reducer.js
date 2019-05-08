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
    case types.FETCH_FORK_SUCCESS: {
        const gistListTemp = [].concat(state.gists);
        const updatedGistList = gistListTemp.map(gist => gist.id === action.payload.gistId ? {...gist, forks: action.payload.result} : gist);
        return {...state, gists: updatedGistList}
    }
    default:
      return state
  }
}

export default app;