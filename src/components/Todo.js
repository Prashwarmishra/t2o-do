import React, { Component } from 'react';

export default class Todo extends Component {
  processDateStamp = (dateString) => {
    const date = dateString.substring(0, 15);
    return date;
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
