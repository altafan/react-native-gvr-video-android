/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';
import VideoView from 'react-native-gvr-video-android'

const WIDTH = Dimensions.get('window').width

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoView 
          video={{
            uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/preview/eG7t61g/underwater-coral-reef-360-vr_S94kBUa0__WM.mp4',
            type: 'mono'
          }}
          volume={1}
          style={{ width: WIDTH - 20, height: 200}}
          displayMode='embedded'
          enableInfoButton={true}
          enableFullscreenButton={true}
          enableCardboardButton={true}
          enableTouchTracking={true}
          hidesTransitionView={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('test', () => test);
