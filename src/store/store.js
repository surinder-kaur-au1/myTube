import { createStore, combineReducers } from 'redux';
import videoReducers from './reducers/videoReducers.js';
import isVideosLoadingReducers from './reducers/isVideosLoadingReducers.js';
let reducer = combineReducers({
    videos: videoReducers,
    isVideoLoading: isVideosLoadingReducers
});
let store = createStore(reducer);

store.subscribe(function(){
    console.log("Dispatched =>", store.getState());
})


function stateMapper(state) {
    return state;
}
export {store, stateMapper};