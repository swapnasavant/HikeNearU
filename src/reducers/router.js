export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const START_OVER = 'START_OVER';

const initialRoute = { path: '', query: {} };
const initialState = { route: initialRoute };

export default function router(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        route: action.route,
      };

    case START_OVER:
      return { ...initialState };

    default:
      return state;
  }
}
