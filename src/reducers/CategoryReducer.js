import {categories} from "../model";
import {setCategoryActionType} from "../actions";

export default (state = categories.all, action) => {
    if (action.type === setCategoryActionType) {
        return action.payload;
    }
    return state;
};