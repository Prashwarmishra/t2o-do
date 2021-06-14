import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteSelectedTodo, fetchTodos } from '../actions/todos';

import { TodoList } from './';
import '../home.css';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      dueDate: '',
      selectedTab: 'ALL',
    };
  }
  componentDidMount() {
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      this.props.dispatch(fetchTodos());
    }
  }

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  handleTabSelect = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  showSelectedTab = () => {
    const { selectedTab } = this.state;
    const { todosList, completed } = this.props.todos;
    if (selectedTab === 'COMPLETED') {
      return completed;
    } else if (selectedTab === 'UNCOMPLETE') {
      const unCompletedList = todosList.filter(
        (todo) => !completed.includes(todo)
      );
      return unCompletedList;
    } else {
      return todosList;
    }
  };

  handleAddTodo = () => {
    const { description, dueDate } = this.state;
    if (description && dueDate) {
      this.props.dispatch(addTodo(description, dueDate));
      this.setState({
        description: '',
        dueDate: '',
      });
    }
  };

  clearCompletedTasks = () => {
    const { completed } = this.props.todos;
    completed.forEach(async (todo) => {
      await this.props.dispatch(deleteSelectedTodo(todo._id));
    });
  };

  clearAllTasks = () => {
    const { todosList } = this.props.todos;
    todosList.forEach(async (todo) => {
      await this.props.dispatch(deleteSelectedTodo(todo._id));
    });
  };

  render() {
    const { description, dueDate } = this.state;
    const { auth, todos } = this.props;
    const todosList = this.showSelectedTab();
    const { isLoggedin } = auth;
    const tasksLeft = todos.todosList.length - todos.completed.length;

    return (
      <div className="home">
        {isLoggedin ? (
          <div id="main">
            <section id="todo-input-section">
              <div id="todo-fields">
                <input
                  type="text"
                  id="todo-input"
                  placeholder="Add tasks here..."
                  onChange={(e) =>
                    this.handleChange('description', e.target.value)
                  }
                  value={description}
                  required
                ></input>

                <input
                  type="date"
                  onChange={(e) => this.handleChange('dueDate', e.target.value)}
                  value={dueDate}
                  required
                />
              </div>
              <button
                type="submit"
                id="todo-submit-button"
                onClick={this.handleAddTodo}
              >
                +
              </button>
            </section>

            <section id="todo-task-section">
              <div className="todo-controls">
                <p id="complete-all-task" onClick={this.clearAllTasks}>
                  <span>
                    <i className="fas fa-check-double"></i>
                  </span>
                  <span>Complete all tasks</span>
                </p>

                <p id="clear-completed-task" onClick={this.clearCompletedTasks}>
                  <span>
                    <i className="fas fa-broom"></i>
                  </span>
                  <span>Clear Completed</span>
                </p>
              </div>

              <hr />
              <TodoList todos={todosList} completed={todos.completed} />
              <hr />

              <div className="todo-controls">
                <p id="tasks-left">
                  <span>
                    <b>{tasksLeft}</b>
                  </span>
                  <span>tasks left</span>
                </p>

                <p id="all-tasks" onClick={() => this.handleTabSelect('ALL')}>
                  <span>All</span>
                </p>

                <p
                  id="uncompleted-tasks"
                  onClick={() => this.handleTabSelect('UNCOMPLETE')}
                >
                  <span>Uncomplete</span>
                </p>

                <p
                  id="completed-tasks"
                  onClick={() => this.handleTabSelect('COMPLETED')}
                >
                  <span>Completed</span>
                </p>
              </div>
            </section>
          </div>
        ) : (
          <div>
            <h2>Please Login to access your Todo list</h2>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(Home);
