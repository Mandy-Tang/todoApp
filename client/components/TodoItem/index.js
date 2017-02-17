import React, { Component } from 'react';
import TodoInput from '../TodoInput';
import style from './style.less';

class TodoItem extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {editing: false};
  }
  handleCheck (e) {
    this.props.completeTodo({id: this.props.todo.id})
  }
  handleDelete (e) {
    this.props.deleteTodo({id: this.props.todo.id})
  }
  handleUpdate (name) {
    console.log(name)
    this.props.updateTodo({id: this.props.todo.id, name: name});
    this.setState({editing: false});
  }
  triggerEdit (e) {
    this.setState({editing: true});
  }
  render () {
    const editing = this.state.editing;
    if (editing) {
      return (
        <li className={"todo-item todo-item--editing " + (this.props.todo.done ? "todo-item--done" : "")}>
          <TodoInput name={this.props.todo.name}
            editing={this.state.editing}
            onSave={::this.handleUpdate}
          />
        </li>
      )
    } else {
      return (
        <li className={"todo-item " + (this.props.todo.done ? "todo-item--done" : "")}>
          <button className="btn--check" onClick={::this.handleCheck}><i className={"iconfont " + (this.props.todo.done ? "icon-circle-selected" : "icon-circle")}></i></button>
          <span>{this.props.todo.name}</span>
          <button className="btn--edit" onClick={::this.triggerEdit}><i className="iconfont icon-edit"></i></button>
          <button className="btn--close" onClick={::this.handleDelete}><i className="iconfont icon-close"></i></button>
        </li>
      )
    }
  }
}

export default TodoItem

