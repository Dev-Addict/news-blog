import {setPostsTypeActionType} from "../actions";

export default (state = true, action) => {
    if (action.type === setPostsTypeActionType) {
        return action.payload;
    }
    return state;
};