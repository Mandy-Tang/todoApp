import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import style from './style.less';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { todos, actions } = this.props;
    return (
      <ul className="todo-list">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} {...actions}/>)}
      </ul>
    )
  }
}

export default TodoList
