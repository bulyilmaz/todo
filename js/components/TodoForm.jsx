import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onClick() {
        this.props.addItem(this.state.value);
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={ this.onChange }/>
                <button onClick={ this.onClick }>Add</button>
            </React.Fragment>
        );
    }
}

export default TodoForm;