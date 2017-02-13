
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todos';
import TodoList from '../../components/TodoList';
import style from './style.css'

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <article>
        <h1>Todos</h1>
        <TodoList/>
      </article>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
