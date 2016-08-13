import React, { Component, PropTypes } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

import Levels from '../components/Levels';

const reducer = combineReducers(reducers);
const store = createStore(reducer,applyMiddleware(thunk));

class AppContainer extends Component {
    render() {
      return (
        <Provider store={store}>
          <Levels />
        </Provider>
      );
    }
}

AppContainer.propTypes = AppContainer;

export default AppContainer;
