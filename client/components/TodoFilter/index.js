import React, { Component } from 'react';
import style from './style.less';

class TodoFilter extends Component {
  constructor(props, content) {
    super(props, content)
  }
  render () {
    return (
      <div className="todo-filter">
        <button className="tab tab--all tab--active">ALL<span className="label">10</span></button>
        <button className="tab tab--undo">UNDO<span className="label">6</span></button>
        <button className="tab tab--done">DONE<span className="label">4</span></button>
      </div>
    )
  }
}

export default  TodoFilter
