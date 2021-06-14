import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo, deleteSelectedTodo } from '../actions/todos';

class Todo extends Component {
  processDateStamp = (dateString) => {
    const date = dateString.substring(0, 15);
    return date;
  };

  handleTodoDelete = () => {
    const { dispatch, todo } = this.props;
    dispatch(deleteSelectedTodo(todo._id));
  };

  handleCheckBox = (e) => {
    const { dispatch, todo } = this.props;
    console.log('checkbox----------------', e.target.checked);
    if (e.target.checked) {
      dispatch(completeTodo(todo));
    }
  };

  render() {
    const { todo } = this.props;
    return (
      <div className="todo">
        <input
          type="checkbox"
          name="todo-checkbox"
          className="todo-checkbox"
          onChange={this.handleCheckBox}
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
