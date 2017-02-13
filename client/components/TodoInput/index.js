import React, { Component } from 'react';
import style from './style.less';

class TodoInput extends Component {
  constructor (props, content) {
    super(props, content)
  }
  render () {
    return (
      <div className="todo-input">
        <input placeholder="What do you want to do next?"/>
      </div>
    )
  }
}

export default TodoInput
