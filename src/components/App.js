import React, { Component, PropTypes } from 'react';
import {
  Button,
  Link,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Hike from '../components/Hike';
import { getNearByHikes, navigateTo } from '../actions/hike';

class App extends Component {

  constructor(props) {
   super();
   this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(name,type='Normal') {
    const { dispatch } = this.props;
      dispatch(navigateTo(name));
  }

  render() {
    const { dispatch, router, hike } = this.props;
    const { route } = router;
    const { path } = route;
    const CREDENTIALS_PATH = 'hike';
    switch (path) {
    case CREDENTIALS_PATH:
    return (
      <Hike
       dispatch = {dispatch}
       hike = {hike}
       path = { path }
      />
    );
    default:
    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TouchableHighlight style={[styles.fullWidthButton,styles.firstWidthButton]} onPress={ () => this.handleButtonPress('easy') }>
            <Text style={styles.fullWidthButtonText}>Easy</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.fullWidthButton,styles.consecutiveButton]} onPress={ () => this.handleButtonPress('medium') }>
            <Text style={styles.fullWidthButtonText}>Medium</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.fullWidthButton,styles.consecutiveButton]} onPress={ () => this.handleButtonPress('hard') }>
            <Text style={styles.fullWidthButtonText}>Streneous</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
   }
  }
}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1
  },
  firstWidthButton: {
    marginTop:150
  },
  consecutiveButton: {
    marginTop:5
  },
  fullWidthButton: {
    backgroundColor: '#f19622',
    height:20,
    width:200,
    marginLeft:100,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidthButtonText: {
  	fontSize:10,
    color: 'white'
  },
  input: {
    paddingLeft: 15,
    height: 40,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  container: {
  flex: 1,
  backgroundColor: '#f0f0f0',
  alignItems: 'stretch',
},
  headline: {
  }
})

App.propTypes = App;

export default App;
