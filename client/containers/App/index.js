
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todos';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import TodoFilter from '../../components/TodoFilter';
import style from './style.less'

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <article className="normal">
        <h1>Todos</h1>
        <TodoInput/>
        <TodoFilter/>
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
