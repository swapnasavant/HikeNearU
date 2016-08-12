import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Link,
  View,
  Navigator,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';

class CustomMarker extends Component {
  render() {
    return (
       <View style={[styles.container, this.props.style]}>
          <View style={styles.bubble}>
            <View style={styles.amount}>
              <Text style={styles.text}> {this.props.title} </Text>
              <Text style={styles.text}> {this.props.description} </Text>
              <TouchableHighlight onPress={ () => this.handleButtonPress('hard') }>
                <Text style={styles.text}>{this.props.link} </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.arrowBorder} />
          <View style={styles.arrow} />
        </View>
      );
    }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#4da2ab',
    borderRadius: 6,
    borderColor: '#007a87',
    marginTop: -65,
  },
  dollar: {

  },
  amount: {
    flex: 1,
  },
  text: {
    fontSize:10,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#4da2ab',
    alignSelf: 'center',
    marginTop: -32,
    marginRight: -45,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
    marginRight: -45,

  },
});

export default CustomMarker;
