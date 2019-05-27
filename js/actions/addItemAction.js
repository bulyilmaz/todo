import * as todoActionTypes from "./todoActionTypes.js";

export const addItemAction = (item) => {
    return {
        type: todoActionTypes.ADD_ITEM,
        payload: {
            item
        }
    };
};