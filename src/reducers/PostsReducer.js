import {getPostsActionType} from "../actions";

export default (posts = null, action) => {
    if (action.type === getPostsActionType) {
        return action.payload;
    }
    return posts;
};