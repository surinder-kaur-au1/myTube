import React from 'react';
import {Provider} from 'react-redux';
import Videos from './video.js';
import {store, stateMapper} from '../store/store.js';
import Menu from './Menu.js';
class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Menu />
                    </div>
                    <div className="col-md-9">
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