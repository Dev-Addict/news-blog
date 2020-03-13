import { combineReducers } from 'redux';

import SearchValueReducer from "./SearchValueReducer";
import PostsReducer from "./PostsReducer";
import ViewStateReducer from "./ViewStateReducer";
import PostsTypeReducer from "./PostsTypeReducer";
import CategoryReducer from "./CategoryReducer";
import NoticeVisibilityReducer from "./NoticeVisibilityReducer";

export default combineReducers({
    searchValue: SearchValueReducer,
    posts: PostsReducer,
    viewState: ViewStateReducer,
    postsType: PostsTypeReducer,
    category: CategoryReducer,
    noticeVisibility: NoticeVisibilityReducer
});