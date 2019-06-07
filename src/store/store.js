import { createStore, combineReducers } from 'redux';
import videoReducers from './reducers/videoReducers.js';
let reducer = combineReducers({
    videos: videoReducers
});
let store = createStore(reducer);


export {store};