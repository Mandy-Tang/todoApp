import React, { Component } from 'react';
import style from './style.less';

class TodoItem extends Component {
  constructor (props, context) {
    super(props, context);
  }
  handleCheck (e) {
    this.props.completeTodo({id: this.props.todo.id})
  }
  render () {
    return (
      <li className={"todo-item " + (this.props.todo.done ? "todo-item--done" : "")}>
        <button className="btn--check" onClick={::this.handleCheck}><i className={"iconfont " + (this.props.todo.done ? "icon-circle-selected" : "icon-circle")}></i></button>
        <span>{this.props.todo.name}</span>
      </li>
    )
  }
}

export default TodoItem

