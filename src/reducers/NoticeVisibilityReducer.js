import {setNoticeVisibilityActionType} from "../actions";

export default (isVisible = true, action) => {
    if (action.type === setNoticeVisibilityActionType) {
        return action.payload;
    }
    return isVisible;
};