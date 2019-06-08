import { createStore, combineReducers } from 'redux';
import videoReducers from './reducers/videoReducers.js';
let reducer = combineReducers({
    videos: videoReducers
});
let store = createStore(reducer);

store.subscribe(function(){
    console.log(store.getState());
})


function stateMapper(state) {
    return state;
}
export {store, stateMapper};