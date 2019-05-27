import React, { Component } from "react";
import { connect } from "react-redux";

import { addItemAction } from ".././actions/addItemAction.js";
import { deleteItemAction } from ".././actions/deleteItemAction.js";
import { getItemsAction } from ".././actions/getItemsAction.js";

import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item) {
        this.props.onAddItem(item);
    }

    deleteItem(item) {
        this.props.onDeleteItem(item);
    }

    componentDidMount() {
        this.props.onGetItems();
    }

    render() {
        return (
            <div className="todo">
                <h1>{ this.props.message }</h1>
                <TodoList items={ this.props.items } deleteItem={ this.deleteItem }/>
                <TodoForm addItem={ this.addItem }/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        items: state.items,
        message: props.message
    };
};

const mapDispatchToProps = {
    onAddItem: addItemAction,
    onDeleteItem: deleteItemAction,
    onGetItems: getItemsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);