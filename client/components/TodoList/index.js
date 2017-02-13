import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import style from './style.less';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const todos = [
      {id: 1, name: 'hello world'},
      {id: 2, name: 'hello world'},
      {id: 3, name: 'hello world'},
      {id: 4, name: 'hello world'},
      {id: 5, name: 'hello world'}
    ]
    return (
      <ul className="todo-list">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
      </ul>
    )
  }
}

export default TodoList
