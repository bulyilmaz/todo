import { addItemAction } from "./addItemAction.js";

export const getItemsAction = () => {
    return dispatch => {
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(items => {
                items.map(item => {
                    dispatch(addItemAction(item));
                });
            });
    };
};