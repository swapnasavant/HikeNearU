export const FETCH_HIKE = 'FETCH_HIKE';
export const CREDENTIALS_PATH = 'hike';
export const CHANGE_SELECTED_TASKS = 'CHANGE_SELECTED_TASKS';
const CHANGE_ROUTE = 'CHANGE_ROUTE';
const GET_HIKES = 'http://localhost:3000/hike';

export function fetchhike() {
  return {
    type: FETCH_HIKE,
  };
}

export function navigateTo(selectedTasks) {
  return dispatch => {
    dispatch(navigate({ path: CREDENTIALS_PATH }));
    return dispatch({
      type: CHANGE_SELECTED_TASKS,
      selectedTasks,
    });
  };
}

export function changeRoute(route) {
  return {
    type: CHANGE_ROUTE,
    route,
  };
}

export function navigate(route) {
  return (dispatch, getState) => {
    return dispatch(changeRoute(route));
  };
}

export function getNearByHikes() {
  const abc = callApi(GET_HIKES);
  console.log(abc);
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
