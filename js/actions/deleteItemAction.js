import * as todoActionTypes from "./todoActionTypes.js";

export const deleteItemAction = (item) => {
    return {
        type: todoActionTypes.DELETE_ITEM,
        payload: {
            item
        }
    };
};