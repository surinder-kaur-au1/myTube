import React from 'react';
import Videos from './video.js';
import {connect} from 'react-redux';
import { stateMapper } from '../store/store.js';
class SearchComponent extends React.Component {
    componentDidMount(){
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
            query:this.props.query
        });
    }
    render() {
        return(
            <div>
                <h2>Search videos on youtube!</h2>
                <hr></hr>
            </div>
        );
    }
}
let Search = connect(stateMapper)(SearchComponent);
export default Search;