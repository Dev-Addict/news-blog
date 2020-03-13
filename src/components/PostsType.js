import React, {Component} from "react";
import {connect} from "react-redux";

import {setPostsType, getPosts} from "../actions";
import '../style/component/PostsType.css';

class PostsType extends Component{
    constructor(props) {
        super(props);
        this.selectEveryThing = this.selectEveryThing.bind(this);
        this.selectTopHeadlines = this.selectTopHeadlines.bind(this);
    }

    selectEveryThing(event) {
        if (!this.props.postsType) {
            this.props.setPostsType(true);
            this.props.getPosts(this.props.searchValue, true, this.props.category);
        }
    }

    selectTopHeadlines(event) {
        if (this.props.postsType) {
            this.props.setPostsType(false);
            this.props.getPosts(this.props.searchValue, false, this.props.category);
        }
    }

    render() {
        return (
            <div className="posts-type-container">
                <div className={`posts-type-type posts-type-type-${this.props.postsType?'selected':'not-selected'}`} onClick={this.selectEveryThing}>
                    Every Thing
                </div>
                <div className={`posts-type-type posts-type-type-${!this.props.postsType?'selected':'not-selected'}`} onClick={this.selectTopHeadlines}>
                    Top Headlines
                </div>
            </div>
        );
    }
}

const mapToStateProps = state => {
    return {
        postsType: state.postsType,
        searchValue: state.searchValue,
        category: state.category
    };
};

export default connect(mapToStateProps, {setPostsType, getPosts})(PostsType);