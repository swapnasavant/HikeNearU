import React, { Component, PropTypes } from 'react';

import {
  Alert,
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';

const propTypes = {
  hike: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

class Hike extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        } });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({ region: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      } });
    });
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  renderMarkers() {
    const { hike } = this.props;
    const { marker } = hike;
    if (marker.length > 0) {
      return marker.map(mark => (
        <MapView.Marker coordinate={mark.latlang} key={mark.id}>
          <MapView.Callout tooltip style={[styles.bubble, styles.button]}>
            <CustomMarker {...mark} />
          </MapView.Callout>
        </MapView.Marker>
     ));
    }
    return null;
  }

  render() {
    return (
      <MapView
        style={styles.container}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        showsUserLocation
      >
        {this.renderMarkers()}
      </MapView>
    );
  }
  }

Hike.propTypes = propTypes;

export default Hike;
