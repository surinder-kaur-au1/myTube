import React from 'react';
//import Videos from './video.js';
import {connect} from 'react-redux';
import { stateMapper } from '../store/store.js';
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query:""
        };

        this.inputChanged = this.inputChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    componentWillUnmount(){
        this.props.dispatch({
            type:"CLEAR_VIDEOS"
        });
    }
    inputChanged(event) {
        this.setState({
            query: event.target.value
        });
    }
    buttonClicked() {
        this.props.dispatch({
            type:"FETCH_VIDEOS",
            videoType:"search",
            query:this.state.query
        });
    }
    render() {
        return(
            <div>
                <h2>Search videos on youtube!</h2>
                <hr></hr>
                <div className="form-row">
                    <div className="col">
                        <input type="text" onChange={this.inputChanged} className="form-control form-control-lg"/>
                    </div>
                    <button onClick= {this.buttonClicked} className="btn btn-info btn-lg"><span className="oi oi-magnifying-glass"></span></button>
                </div>
            </div>
        );
    }
}
let Search = connect(stateMapper)(SearchComponent);
export default Search;