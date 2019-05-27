import React from "react";
import ReactDOM from "react-dom";
import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { todoReducer } from "./reducers/todoReducer.js";

import Todo from "./components/Todo.jsx";

const mainReducer = combineReducers({
    items: todoReducer
});
const allEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(
    mainReducer, {
        items: []
    },
    allEnhancers
);

ReactDOM.render(<Provider store={ store }><Todo message="To Do"/></Provider>, document.getElementById("root"));