import {getPostsActionType} from "../actions";

export default (state = null, action) => {
    if (action.type === getPostsActionType) {
        return action.payload;
    }
    return state;
};