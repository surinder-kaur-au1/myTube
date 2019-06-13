import {fetchVideos } from '../api/youtube.js';


function isVideosLoadingReducers(isVideoLoading= false, action) {

    if(action.type === "FETCH_VIDEOS") {
        return true;
    }

    if(action.type === "VIDEO_LOADED") {
        return false;
    }
    return isVideoLoading;

}
export default isVideosLoadingReducers;