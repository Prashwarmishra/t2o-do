import React, { Component } from 'react';
import { Todo } from './';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul id="todo-list">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => <Todo todo={todo} key={todo._id} />)}
      </ul>
    );
  }
}

export default TodoList;
