import React, { Component } from 'react';
import style from './style.less';

class TodoInput extends Component {
  constructor (props, content) {
    super(props, content);
    this.state = {
      name: this.props.text || ''
    }
  }

  handleChange (e) {
    this.setState({name: e.target.value})
  }

  handleSubmit (e) {
    if (e.which === 13) {
      const name = e.target.value.trim();
      this.props.addTodo(name);
      this.setState({name: ''})
    }
  }

  render () {
    return (
      <div className="todo-input">
        <input placeholder="What do you want to do next?"
               type="text"
               value={this.state.name}
               onChange={::this.handleChange}
               onKeyDown={::this.handleSubmit}/>
      </div>
    )
  }
}

export default TodoInput
