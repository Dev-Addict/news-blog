import React, {Component} from 'react';

import '../style/component/Post.css';

class Post extends Component {
    render() {
        return (
            <div className="post-container">
                <div className="post-title">{this.props.title}</div>
                {(() => {
                    if (this.props.imageURL) {
                        return<img src={this.props.imageURL} alt={this.props.title} className="post-image" key={this.props.imageURL}/>;
                    }
                })()}
                <div className="post-description">{this.props.description}</div>
                <br/>
                <span className="post-author">Author: {this.props.author}</span>
                <br/>
                <span className="post-source">Source: {this.props.source}</span>
                <br/>
                <br/>
                <a href={this.props.url}><button className="post-see-more-button">see more <i className="caret square right icon"></i></button></a>
            </div>
        );
    }
}

export default Post;