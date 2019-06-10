import {fetchVideos } from '../api/youtube.js';
import {store} from '../store.js';
function videoReducers(videos=[], action) {

  if(action.type == "CLEAR_VIDEOS") {
    return [];
  }
    if(action.type =="FETCH_VIDEOS") {

        fetchVideos(store, action.videoType);
      //  videos = ["video1", "video2", "video3"]
        return videos;
    }
    


if(action.type == "VIDEOS_LOADED") {
  videos = action.videos;
  return videos;
}

return videos;
}
export default videoReducers;