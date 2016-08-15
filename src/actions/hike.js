import * as consts from '../constants/HikeConstants';

const GET_HIKES = 'http://localhost:3000/hike?intensity=';

export function fetchhike(json) {
  return {
    type: consts.FETCH_HIKE,
    json,
  };
}

export function navigateTo(selectedTasks) {
  return dispatch => {
    dispatch(getNearByHikes(selectedTasks));
    dispatch(navigate({ path: consts.MAP_PATH }));
    return dispatch({
      type: consts.CHANGE_SELECTED_TASKS,
      selectedTasks,
    });
  };
}

export function changeRoute(route) {
  return {
    type: consts.CHANGE_ROUTE,
    route,
  };
}

export function navigate(route) {
  return (dispatch) => dispatch(changeRoute(route));
}

export function getNearByHikes(selectedTasks) {
  const URL = `${GET_HIKES}${selectedTasks}`;
  return dispatch =>
    callApi(URL)
      .then(json => dispatch(fetchhike(json)));
}

function callApi(URL, obj = {}) {
  const options = { ...obj, credentials: 'same-origin' };
  return fetch(URL, options)
    .then(response => {
      if (!response.ok) {
        return response.text()
          .then(text => Promise.reject(text));
      }
      return response.json();
    })
    .catch(err => { throw err; });
}
