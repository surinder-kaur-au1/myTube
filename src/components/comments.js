import React from 'react';
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class CommentsComponent extends React.Component {
     
    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEO_COMMENTS",
            videoId: this.props.videoId
        });
    }
    render() {
        return(
            this.props.currentVideoComments.map( c=> {
                return<p>{c.snippet.topLevelComment.snippet.textDisplay}</p>
            })
        );
    }
}
let Comments = connect(stateMapper)(CommentsComponent);
export default Comments;