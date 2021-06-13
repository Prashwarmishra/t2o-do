import React, { Component } from 'react';

export default class Todo extends Component {
  processDateStamp = (dateString) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(5, 7);
    const date = dateString.substring(8, 10);
    return `${date}-${month}-${year}`;
  };

  render() {
    const { todo } = this.props;
    return (
      <div className="todo">
        <input type="checkbox" name="todo-checkbox" className="todo-checkbox" />
        <li className="todo-task">
          <div>
            <div className="todo-task-name">{todo.description}</div>
            <div className="todo-task-date">
              {this.processDateStamp(todo.dueDate)}
            </div>
          </div>
        </li>
        <button className="todo-delete-button">
          <span>
            <i className="fas fa-minus-circle"></i>
          </span>
        </button>
      </div>
    );
  }
}
