import {categories, viewState} from "../model";

export const updateSearchValueActionType = 'UPDATE_SEARCH_VALUE';
export const getPostsActionType = 'GET_POSTS';
export const setBlogViewStateActionType = 'SET_BLOG_VIEW_STATE';
export const setPostsTypeActionType = 'SET_POSTS_TYPE';
export const setCategoryActionType = 'SET_CATEGORY';
export const setNoticeVisibilityActionType = 'SET_NOTICE_VISIBILITY';

export const updateSearchValue = searchValue => {
    return {
        type: updateSearchValueActionType,
        payload: searchValue
    };
};

export const getPosts = (searchValue, isEveryThing = true, category = categories.all) => {
    return async dispatch => {
        dispatch(setBlogViewState(viewState.LOADING));
        const request = await fetch(`http://newsapi.org/v2/${isEveryThing?'everything':'top-headlines'}?q=${searchValue}&sortBy=publishedAt&apiKey=5e03e5071d034d31bd436c12c8936b96&language=en${category!==categories.all && !isEveryThing?`&category=${category}`:''}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin'
        });
        const response = await request.json();
        if (await response.status === 'ok') {
            dispatch({
                type: getPostsActionType,
                payload: await response.articles
            });
            dispatch(setBlogViewState(viewState.READY));
        } else {
            dispatch(setBlogViewState(viewState.NOTHING_TO_SHOW));
        }
    };
};

export const setBlogViewState = state => {
    return {
        type: setBlogViewStateActionType,
        payload: state
    };
};

export const setPostsType = isEveryThing => {
    return {
        type: setPostsTypeActionType,
        payload: isEveryThing
    };
};

export const setCategory = category => {
    return {
        type: setCategoryActionType,
        payload: category
    };
};

export const setNoticeVisibility = isVisible => {
    return {
        type: setNoticeVisibilityActionType,
        payload: isVisible
    };
};