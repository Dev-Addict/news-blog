import {setBlogViewStateActionType} from "../actions";

export default (state = 0, action) => {
    if (action.type === setBlogViewStateActionType) {
        return action.payload;
    }
    return state;
};