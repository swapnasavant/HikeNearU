const initialState = {
  marker: {},
  intensity: 'Easy',
};

export const FETCH_HIKE = 'FETCH_HIKE';
export const CREDENTIALS_PATH = 'hike';
export const CHANGE_SELECTED_TASKS = 'CHANGE_SELECTED_TASKS';

export default function hike(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_HIKE :
      return {
        ...state,
        marker: action.json,
      };
    case CHANGE_SELECTED_TASKS:
      return {
        ...state,
        intensity: action.selectedTasks,
      };
    default :
      return state;
  }
}
