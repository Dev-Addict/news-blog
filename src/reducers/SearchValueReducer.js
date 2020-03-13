import {updateSearchValueActionType} from "../actions";

export default (searchValue = '', action) => {
    if (action.type === updateSearchValueActionType) {
        return action.payload;
    }
    return searchValue;
};