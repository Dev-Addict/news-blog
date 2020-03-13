import {setNoticeVisibilityActionType} from "../actions";

export default (state = true, action) => {
    if (action.type === setNoticeVisibilityActionType) {
        return action.payload;
    }
    return state;
};