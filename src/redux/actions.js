import types from './types';
import { buildUsersList } from './utils';

/*
 * action creators
 */

export const searchGistByUser = (user) => {
  return (dispatch) => {
      dispatch(fetchGistStart());
      return searchGistByUserApi(user).then(results => {
        return results.json();
      })
      .then(data => {
          const result = Array.isArray(data) ? data : [];
          dispatch(fetchGistSuccess(result));
      });
    }
}

const searchGistByUserApi = (user) => fetch(`https://api.github.com/users/${user}/gists`);

const fetchGistSuccess = (payload) => ({
    type: types.FETCH_GIST_SUCCESS,
    payload,
});

const fetchGistStart = () => ({
    type: types.FETCH_GIST_START,
})

export const setUser = payload => ({
    type: types.SET_USER,
    payload,
})