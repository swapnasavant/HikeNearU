import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Linking,
  View,
  TouchableHighlight,
} from 'react-native';

const propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 100,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#2D4B1E',
    borderRadius: 2,
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  text: {
    fontSize: 7,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  descriptionText: {
    fontSize: 4,
    color: '#FFFFFF',
  },
});

class CustomMarker extends Component {

  constructor() {
    super();
    this.goToPlace = this.goToPlace.bind(this);
  }

  goToPlace() {
    const { link } = this.props;
    Linking.openURL(link);
  }

  render() {
    const { title, description, duration } = this.props;
    return (
      <TouchableHighlight onPress={this.goToPlace}>
        <View style={[styles.container]}>
          <View style={styles.bubble}>
            <View style={styles.amount}>
              <Text style={styles.text}> {title} </Text>
              <Text style={styles.text}> {duration} </Text>
              <Text style={styles.descriptionText}> {description} </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      );
  }
}

CustomMarker.propTypes = propTypes;

export default CustomMarker;
