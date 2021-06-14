import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  completeTodo,
  deleteSelectedTodo,
  uncompleteTodo,
} from '../actions/todos';

class Todo extends Component {
  processDateStamp = (dateString) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(5, 7);
    const date = dateString.substring(8, 10);
    return `${date}-${month}-${year}`;
  };

  handleTodoDelete = () => {
    const { dispatch, todo } = this.props;
    dispatch(deleteSelectedTodo(todo._id));
  };

  handleCheckBox = (e) => {
    const { dispatch, todo } = this.props;
    if (e.target.checked) {
      dispatch(completeTodo(todo));
    } else {
      dispatch(uncompleteTodo(todo));
    }
  };

  render() {
    const { todo, isChecked } = this.props;
    return (
      <div className="todo">
        <input
          type="checkbox"
          name="todo-checkbox"
          className="todo-checkbox"
          onChange={this.handleCheckBox}
          checked={isChecked}
        />
        <li className="todo-task">
          <div>
            <div className="todo-task-name">{todo.description}</div>
            <div className="todo-task-date">
              {this.processDateStamp(todo.dueDate)}
            </div>
          </div>
        </li>
        <button className="todo-delete-button" onClick={this.handleTodoDelete}>
          <span>
            <i className="fas fa-minus-circle"></i>
          </span>
        </button>
      </div>
    );
  }
}

export default connect()(Todo);
