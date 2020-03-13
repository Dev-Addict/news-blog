import React, {Component} from "react";
import {connect} from 'react-redux';

import {setCategory, getPosts} from "../actions";
import {categories} from "../model";
import '../style/component/Category.css';

class Category extends Component {
    render() {
        let categoriesKeys = Object.keys(categories);
        return (
            <div className="category-container">
                {
                    categoriesKeys.map(category => {
                        return (
                            <div
                                className={`category-category category-category-${category === this.props.category ? 'selected' : 'not-selected'}`}
                                onClick={event => {
                                    this.props.setCategory(category);
                                    this.props.getPosts(this.props.searchValue, this.props.postsType, category)
                                }}>
                                {category}
                            </div>
                        );
                    })
                }
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

export default connect(mapStateToProps, {setCategory, getPosts})(Category);