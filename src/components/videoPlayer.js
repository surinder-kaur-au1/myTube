import React from 'react';
import {connect} from 'react-redux';
import {store, stateMapper} from '../store/store.js';
class VideoPlayerComponent extends React.Component {
        render() {

           //console.log(this.props);
            
            return(
                <h2>{this.props.match.params.videoId}</h2>
            
            );
        }
}
let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);
export default VideoPlayer;