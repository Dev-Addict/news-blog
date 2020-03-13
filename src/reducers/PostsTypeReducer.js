import {setPostsTypeActionType} from "../actions";

export default (postType = true, action) => {
    if (action.type === setPostsTypeActionType) {
        return action.payload;
    }
    return postType;
};