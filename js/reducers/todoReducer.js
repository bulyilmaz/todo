import * as todoActionTypes from "../actions/todoActionTypes.js";

export const todoReducer = (items = [], action) => {
    switch (action.type) {
        case todoActionTypes.ADD_ITEM:
            return items.concat(action.payload.item);
        case todoActionTypes.DELETE_ITEM:
            return items.filter(item => {
                return item !== action.payload.item;
            });
        default:
            return items;
    }
};