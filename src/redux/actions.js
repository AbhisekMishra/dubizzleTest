import types from './types';

/*
 * action creators
 */
const searchGistByUserApi = (user) => fetch(`https://api.github.com/users/${user}/gists`);

const getForksByGistIdApi = gistId => fetch(`https://api.github.com/gists/${gistId}/forks`);

export const searchGistByUser = (user) => {
  return (dispatch) => {
      dispatch(fetchGistStart());
      return searchGistByUserApi(user).then(results => {
        return results.json();
      })
      .then(data => {
          const result = Array.isArray(data) ? data : [];
          dispatch(fetchGistSuccess(result));
          result.forEach(r => dispatch(getForksByGistId(r.id)))
      });
    }
}

const getForksByGistId = gistId => {
    return dispatch => {
        return getForksByGistIdApi(gistId).then(results => {
            return results.json();
          })
          .then(data => {
            const result = Array.isArray(data) ? data : [];
            dispatch(fetchForkSuccess({result, gistId}));
        });
    }
}

const fetchGistSuccess = (payload) => ({
    type: types.FETCH_GIST_SUCCESS,
    payload,
});

const fetchGistStart = () => ({
    type: types.FETCH_GIST_START,
});

const fetchForkSuccess = (payload) => ({
    type: types.FETCH_FORK_SUCCESS,
    payload,
});

export const setUser = payload => ({
    type: types.SET_USER,
    payload,
})