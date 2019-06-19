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
      console.log("fetch error=>",err);
    });
  
}
}

function fetchOneVideo(store, action) {
  let url=`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

  //console.log(url);
  fetch(url)
  
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    store.dispatch({
      type: "VIDEOS_DATA_LOADED",
      videoData: data.items[0]
    })
  })
  .catch(function(err) {
    console.log("fetch error=>", err);
  });
}

function fetchVideoComments(store, action) {
  let url=`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=_&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

  //console.log(url);
  fetch(url)
  
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    store.dispatch({
      type: "VIDEO_COMMENTS_LOADED",
      comments: data.items
    })
  })
  .catch(function(err) {
    console.log("fetch error=>", err);
  });
}

export {fetchVideos, fetchOneVideo, fetchVideoComments};