import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(item) {
        this.props.deleteItem(item);
    }

    render() {
        return (
            <ul>
                { this.props.items.map((item, index) => (
                    <li key={ index }><span>{ item }</span> (<a href="javascript:;" onClick={ event => this.onClick(item) }>Delete</a>)</li>
                )) }
            </ul>
        );
    }
}

export default TodoList;