import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

class Levels extends Component {
    render() {
      return (
          <App {...this.props} />
       );
    }
}

Levels.propTypes = Levels;

function mapStateToProps(state) {
  const { hike, router } = state;
  return {
    hike,
    router
  };
}

export default connect(mapStateToProps)(Levels);
