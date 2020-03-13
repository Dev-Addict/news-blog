import {updateSearchValueActionType} from "../actions";

export default (state = '', action) => {
    if (action.type === updateSearchValueActionType) {
        return action.payload;
    }
    return state;
};