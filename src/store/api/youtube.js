import MYTUBE_CONFIG from '../../config.js';
function fetchVideos(store, action) {
    if(action.videoType === "trending") {
        let url =`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&maxResults=30&chart=mostPopular`;
    fetch(url)
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
} else if(action.videoType === "search") {
    //console.log("searching new videos");
    let url= `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${action.query}&key=AIzaSyDXNeGH66QQlxo8dRAbIpAxUOdDg5WO9l8`;
    fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(response) {
      store.dispatch({
        type: "VIDEOS_LOADED",
        videos: response.items
      });
    })
    .catch(function(err) {
      console.log(err);
    });
    console.log(url);
}
}
export {fetchVideos};