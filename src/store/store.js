import { createStore, combineReducers } from 'redux';
import videoReducers from './reducers/videoReducers.js';
import isVideosLoadingReducers from './reducers/isVideosLoadingReducers.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';
import currentVideoCommentsReducer from './reducers/currentVideoComments.js'
let reducer = combineReducers({
    videos: videoReducers,
    isVideoLoading: isVideosLoadingReducers,
    currentPlayerVideo: currentPlayerVideoReducer,
    currentVideoComments: currentVideoCommentsReducer
});
let store = createStore(reducer);

store.subscribe(function(){
    console.log("Dispatched =>", store.getState());
})


function stateMapper(state) {
    return state;
}
export {store, stateMapper};