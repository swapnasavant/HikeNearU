import * as consts from '../constants/HikeConstants';

const initialState = {
  marker: {},
  intensity: 'Easy',
};

export default function hike(state = initialState, action = {}) {
  switch (action.type) {
    case consts.FETCH_HIKE :
      return {
        ...state,
        marker: action.json,
      };
    case consts.CHANGE_SELECTED_TASKS:
      return {
        ...state,
        intensity: action.selectedTasks,
      };
    default :
      return state;
  }
}
