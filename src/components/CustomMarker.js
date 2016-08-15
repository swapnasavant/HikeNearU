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
    backgroundColor: '#4da2ab',
    borderRadius: 2,
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
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
    const { title, description } = this.props;
    return (
      <TouchableHighlight onPress={this.goToPlace}>
        <View style={[styles.container]}>
          <View style={styles.bubble}>
            <View style={styles.amount}>
              <Text> {title} </Text>
              <Text> {description} </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      );
  }
}

CustomMarker.propTypes = propTypes;

export default CustomMarker;
