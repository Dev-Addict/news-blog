import {categories} from "../model";
import {setCategoryActionType} from "../actions";

export default (category = categories.all, action) => {
    if (action.type === setCategoryActionType) {
        return action.payload;
    }
    return category;
};