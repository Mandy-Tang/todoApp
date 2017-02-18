import React, { Component } from 'react';
import style from './style.less';

class TodoFilter extends Component {
  constructor(props, content) {
    super(props, content)
  }
  handleClick (name) {
    this.props.changeFilter({filter: name})
  }
   render () {
    return (
      <div className="todo-filter">
        <button className="tab tab--all tab--active" onClick={()=>this.handleClick('ALL')}>ALL<span className="label">10</span></button>
        <button className="tab tab--undo" onClick={()=>this.handleClick('UNDO')}>UNDO<span className="label">6</span></button>
        <button className="tab tab--done" onClick={()=>this.handleClick('DONE')}>DONE<span className="label">4</span></button>
      </div>
    )
  }
}

export default  TodoFilter
