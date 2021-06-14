import React, { Component } from 'react';
import { Todo } from './';

class TodoList extends Component {
  checkIfComplete = (todo) => {
    const { completed } = this.props;
    if (completed.includes(todo)) {
      return true;
    }
    return false;
  };

  render() {
    const { todos } = this.props;
    return (
      <ul id="todo-list">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo._id}
              isChecked={this.checkIfComplete(todo)}
            />
          ))}
      </ul>
    );
  }
}

export default TodoList;
