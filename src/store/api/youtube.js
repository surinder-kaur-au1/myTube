
function fetchVideos(store, action) {
    if(action.videoType === "trending") {
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
} else if(action.videoType === "search") {
    let url = `https://www.gooleapis.com/youtube/v3/search?key=AIzaSyDXNeGH66QQlxo8dRAbIpAxUOdDg5WO9l8&q=${action.query}&part=snippet&maxResults=30`;
    console.log(url);
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
}
}
export {fetchVideos};