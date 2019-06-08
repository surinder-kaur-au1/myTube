import {fetchVideos } from '../api/youtube.js';
import {store} from '../store.js';
function videoReducers(videos=[], action) {
    if(action.type ="FETCH_VIDEOS") {

        fetchVideos(action.videoType);
      //  videos = ["video1", "video2", "video3"]
        return videos;
    }
    return videos;
}
export default videoReducers;