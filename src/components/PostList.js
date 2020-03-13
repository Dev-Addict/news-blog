import React, {Component} from "react";
import {connect} from 'react-redux';

import Post from "./Post";
import {viewState} from "../model";
import '../style/component/PostList.css';

class PostList extends Component {
    render() {
        if (this.props.viewState === viewState.READY) {
            return this.props.posts.map(post => {
                return <Post title={post.title} imageURL={post.urlToImage} description={post.description}
                             url={post.url} author={post.author} source={post.source.name} key={post.url}/>
            });
        } else if (this.props.viewState === viewState.LOADING) {
            return (
                <div className="post-list-loader-container">
                    <div className="post-list-loader"> </div>
                </div>
            );
        }
        return (
            <div className="post-list-nothing-container">
                <i className="close icon large loading"/>
                <div className="post-list-nothing-container-text">No News To Show</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        viewState: state.viewState
    };
};

export default connect(mapStateToProps)(PostList);