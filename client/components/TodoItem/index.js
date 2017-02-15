import React, { Component } from 'react';
import style from './style.less';

class TodoItem extends Component {
  constructor (props, context) {
    super(props, context);
  }
  render () {
    return (
      <li className={"todo-item " + (this.props.todo.done ? "todo-item--done" : "")}>
        <span>{this.props.todo.name}</span>
      </li>
    )
  }
}

export default TodoItem

