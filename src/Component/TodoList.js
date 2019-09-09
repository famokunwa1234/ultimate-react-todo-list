import React, { Component } from "react";
import Item from "./TodoItem";
class TodoList extends Component {
    render() {
        return (
            <section>
                <h1>helo from Todolist</h1>
                <Item />
            </section>
        );
    }
}

export default TodoList;