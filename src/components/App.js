import React from 'react';
import Videos from './video.js';
class App extends React.Component {
    render() {
        return(
            <div className="container">
                <div class="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>myTube- Trending video</h2>
                        <hr></hr>
                        <Videos />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;