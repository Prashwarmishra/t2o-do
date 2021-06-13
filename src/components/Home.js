import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todos';

import '../home.css';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTodos());
    console.log('/////////', this.props.auth.isLoggedin);
  }

  render() {
    const { isLoggedin } = this.props.auth;
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
                  required
                ></input>
                <input type="date" />
              </div>
              <button type="submit" id="todo-submit-button">
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

              <ul id="todo-list">
                <div className="todo">
                  <input
                    type="checkbox"
                    name="todo-checkbox"
                    className="todo-checkbox"
                  />
                  <li className="todo-task">
                    <div>
                      <div className="todo-task-name">Buy dozen pens</div>
                      <div className="todo-task-date">May, 28th</div>
                    </div>
                  </li>
                  <button className="todo-delete-button">
                    <span>
                      <i className="fas fa-minus-circle"></i>
                    </span>
                  </button>
                </div>

                <div className="todo">
                  <input
                    type="checkbox"
                    name="todo-checkbox"
                    className="todo-checkbox"
                  />
                  <li className="todo-task">
                    <div>
                      <div className="todo-task-name">Buy dozen pens</div>
                      <div className="todo-task-date">May, 28th</div>
                    </div>
                  </li>
                  <button className="todo-delete-button">
                    <span>
                      <i className="fas fa-minus-circle"></i>
                    </span>
                  </button>
                </div>

                <div className="todo">
                  <input
                    type="checkbox"
                    name="todo-checkbox"
                    className="todo-checkbox"
                  />
                  <li className="todo-task">
                    <div>
                      <div className="todo-task-name">Buy dozen pens</div>
                      <div className="todo-task-date">May, 28th</div>
                    </div>
                  </li>
                  <button className="todo-delete-button">
                    <span>
                      <i className="fas fa-minus-circle"></i>
                    </span>
                  </button>
                </div>
              </ul>

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
