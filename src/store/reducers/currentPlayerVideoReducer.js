import {fetchOneVideo} from '../api/youtube.js';
import {store} from '../store.js';
function currentPlayerVideoReducer(currentPlayerVideo= {}, action) {

    if(action.type === "CLEAR_VIDEO_DATA") {
        return {};
    }

    if(action.type === "FETCH_VIDEO_DATA") {
        fetchOneVideo(store, action);
    }

    if(action.type === "VIDEOS_DATA_LOADED") {
        let newAction= action.videoData;
        newAction.snippet.shortDescription = action.videoData.snippet.shortDescription.slice(0, 100);
        return newAction;
    }
    return currentPlayerVideo;
}
export default currentPlayerVideoReducer;