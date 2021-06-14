import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchTodos } from '../actions/todos';

import { TodoList } from './';
import '../home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      duuDate: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  handleAddTodo = () => {
    const { description, dueDate } = this.state;
    if (description && dueDate) {
      this.props.dispatch(addTodo(description, dueDate));
    }
  };

  render() {
    const { auth, todos } = this.props;
    const { todosList } = todos;
    const { isLoggedin } = auth;
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
                  required
                ></input>

                <input
                  type="date"
                  onChange={(e) => this.handleChange('dueDate', e.target.value)}
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
                <p id="complete-all-task">
                  <span>
                    <i className="fas fa-check-double"></i>
                  </span>
                  <span>Complete all tasks</span>
                </p>

                <p id="clear-completed-task">
                  <span>
                    <i className="fas fa-broom"></i>
                  </span>
                  <span>Clear Completed</span>
                </p>
              </div>

              <hr />
              <TodoList todos={todosList} />
              <hr />

              <div className="todo-controls">
                <p id="tasks-left">
                  <span>
                    <b>0</b>
                  </span>
                  <span>tasks left</span>
                </p>

                <p id="all-tasks">
                  <span>All</span>
                </p>

                <p id="uncompleted-tasks">
                  <span>Uncomplete</span>
                </p>

                <p id="completed-tasks">
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
