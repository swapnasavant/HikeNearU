const initialState = {
  latlang : {
    latitude: 0,
    longitude: 0,
  },
  title: '',
  description: '',
  link: '',
  intensity:''
};

export const FETCH_HIKE = 'FETCH_HIKE';
export const CREDENTIALS_PATH = 'hike';
export const CHANGE_SELECTED_TASKS = 'CHANGE_SELECTED_TASKS';

export default function hike(state=initialState, action={}) {
  switch(action.type) {
    case FETCH_HIKE :
    return {
        ...state,
        latlang : {
        latitude: 37.352176,
        longitude: -122.137690,
        },
      title: 'Rancho San Antonio',
      description: '9.4 miles',
      link: 'http://o.bahiker.com/southbayhikes/ranchoblack.html'
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
