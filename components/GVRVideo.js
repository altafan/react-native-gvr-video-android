/*
 * @Author: altafan 
 * @Date: 2017-06-22 15:25:03 
 * @Last Modified by: altafan
 * @Last Modified time: 2017-06-23 16:36:11
 */
import React, { Component, PropTypes } from 'react'
import { requireNativeComponent, View } from 'react-native'


class VideoView extends Component {
  render() {
    return <RCTVideoView {...this.props} />
  }
}

VideoView.propTypes = {
  ...View.propTypes,
  video: PropTypes.shape({
    uri: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  volume: PropTypes.number,
  displayMode: PropTypes.string,
  enableFullscreenButton: PropTypes.bool,
  enableCardboardButton: PropTypes.bool,
  enableInfoButton: PropTypes.bool,
  enableTouchTracking: PropTypes.bool,
  hidesTransitionView: PropTypes.bool,
}

const RCTVideoView = requireNativeComponent('Video', VideoView, { nativeOnly: {} });

export default VideoView;