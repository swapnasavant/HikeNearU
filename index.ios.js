import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/components/App';

class HikeNearU extends Component {

  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }

  configureScene(route, routeStack) {
   if(route.type == 'Modal') {
     return Navigator.SceneConfigs.FloatFromBottom
   }
   return Navigator.SceneConfigs.PushFromRight
 }

  render() {
    return (
      <Navigator
      configureScene={ this.configureScene }
      style={{ flex:1 }}
      initialRoute={{ component: App }}
      renderScene={ this.renderScene } />
     );
  }
}

AppRegistry.registerComponent('HikeNearU', () => HikeNearU);
