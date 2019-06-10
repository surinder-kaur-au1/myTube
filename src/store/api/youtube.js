import { store } from "../store";
if(videoType == "trending") {
function fetchVideos(videoType) {
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyDXNeGH66QQlxo8dRAbIpAxUOdDg5WO9l8&chart=mostPopular")
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
}
export {fetchVideos};