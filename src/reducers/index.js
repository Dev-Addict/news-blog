import { combineReducers } from 'redux';

import {
    updateSearchValueActionType, getPostsActionType,
    setBlogViewStateActionType, setPostsTypeActionType,
    setCategoryActionType, setNoticeVisibilityActionType
} from '../actions';

import {categories} from "../model";

const searchValueReducer = (searchValue = '', action) => {
    if (action.type === updateSearchValueActionType) {
        return action.payload;
    }
    return searchValue;
};

const postsReducer = (posts = null, action) => {
    if (action.type === getPostsActionType) {
        return action.payload;
    }
    return posts;
};

// eslint-disable-next-line no-use-before-define
const viewStateReducer = (viewState = 0, action) => {
    if (action.type === setBlogViewStateActionType) {
        return action.payload;
    }
    return viewState;
};

const postsTypeReducer = (postType = true, action) => {
    if (action.type === setPostsTypeActionType) {
        return action.payload;
    }
    return postType;
};

const categoryReducer = (category = categories.all, action) => {
    if (action.type === setCategoryActionType) {
        return action.payload;
    }
    return category;
};

const noticeVisibilityReducer = (isVisible = true, action) => {
    if (action.type === setNoticeVisibilityActionType) {
        return action.payload;
    }
    return isVisible;
};

export default combineReducers({
    searchValue: searchValueReducer,
    posts: postsReducer,
    viewState: viewStateReducer,
    postsType: postsTypeReducer,
    category: categoryReducer,
    noticeVisibility: noticeVisibilityReducer
});