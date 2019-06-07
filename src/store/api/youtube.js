import { store } from "../store";

function fetchVideos(videoType) {
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC0fpSJ4LR3b2jmarEXTHsHW4UlE12NW84")
    .then(function(data) {
        return data.json();
    })
     .then(function(response) {
        //console.log(response);
        store.dispatch({
            type: "VIDEOS_LOADED",
            videos: response.items
        })
    })
     .catch(function(err) {
        console.log(err);
    })
}
export {fetchVideos};