import React from 'react';
import {Provider} from 'react-redux';
import Videos from './video.js';
import {store, stateMapper} from '../store/store.js';
class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
            <div className="container">
                <div class="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>myTube- Trending video</h2>
                        <hr></hr>
                        <Videos />
                    </div>
                </div>
            </div>
            </Provider>
        );
    }
}
export default App;