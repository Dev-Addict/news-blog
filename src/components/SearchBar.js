import React, {Component} from "react";
import {connect} from 'react-redux';

import {updateSearchValue, getPosts} from "../actions";
import PostsType from "./PostsType";
import Category from "./Category";
import '../style/component/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
    }

    onInputChanged(event) {
        this.props.updateSearchValue(event.target.value);
    }

    async onFormSubmitted(event) {
        event.preventDefault();
        this.props.getPosts(this.props.searchValue, this.props.postsType, this.props.category);
    }

    render() {
        return (
            <div className="search-bar-container">
                <div className="search-bar-title">Search In News</div>
                <div className="search-bar-section">
                    <form onSubmit={this.onFormSubmitted}>
                        <input type="text"
                               placeholder="search for news..."
                               value={this.props.searchValue}
                               className="search-bar-search-input"
                               onChange={this.onInputChanged}/>
                        <button type="submit" className="search-bar-search-button">
                            <i className="search icon" id="color-black"/>
                        </button>
                    </form>
                </div>
                <PostsType/>
                <Category/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchValue: state.searchValue,
        postsType: state.postsType,
        category: state.category
    };
};

export default connect(mapStateToProps, {updateSearchValue, getPosts})(SearchBar);