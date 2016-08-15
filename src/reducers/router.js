import * as consts from '../constants/HikeConstants';

const initialRoute = { path: '', query: {} };
const initialState = { route: initialRoute };

export default function router(state = initialState, action) {
  switch (action.type) {
    case consts.CHANGE_ROUTE:
      return {
        ...state,
        route: action.route,
      };

    case consts.BACK_ROUTE:
      return { ...initialState };

    default:
      return state;
  }
}
