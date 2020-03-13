import {setBlogViewStateActionType} from "../actions";

export default (viewState = 0, action) => {
    if (action.type === setBlogViewStateActionType) {
        return action.payload;
    }
    return viewState;
};