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
  Dimensions,
  AlertIOS,
  ActivityIndicatorIOS
} from 'react-native';

import MapView from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';
import { fetchhike } from '../actions/hike';

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
     markers : [ ]
    // {
    //   latlang : {
    //     latitude: 37.352176,
    //     longitude: -122.137690,
    //   },
    //   title: 'Rancho San Antonio',
    //   description: '9.4 miles',
    //   link: 'http://o.bahiker.com/southbayhikes/ranchoblack.html'
    // },
    // {
    //   latlang : {
    //     latitude:  37.351334,
    //     longitude: 122.92620,
    //   },
    //   title: 'Hike 2',
    //   description: '9.4 miles',
    //   link: 'http://o.bahiker.com/southbayhikes/ranchoblack.html'
    // }
   // ]
    }

    this.onRegionChange = this.onRegionChange.bind(this);
  }

onRegionChange(region) {
  this.setState({ region });
}

componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }});

    })
    this.getMarker();
}

getMarker() {
  const { dispatch, hike } = this.props;
  const latitute = this.state.region.latitute;
  const longitude = this.state.region.longitude;
}

render() {
  const markers = [];
  markers.push(this.props.hike);
    return (
      <MapView style={styles.container}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        showsUserLocation = {true}>
        {markers.map(marker => (
           <MapView.Marker coordinate={marker.latlang} key={marker.latlang.latitude}>
           <MapView.Callout tooltip>
             <CustomMarker {...marker}>
             </CustomMarker>
           </MapView.Callout>
           </MapView.Marker>
       ))}
      </MapView>
    );
  }
}

var styles = StyleSheet.create({
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
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default Hike;
