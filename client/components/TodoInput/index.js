import React, { Component } from 'react';
import style from './style.less';

class TodoInput extends Component {
  constructor (props, content) {
    super(props, content);
    this.state = {
      name: this.props.name || '',
    };
    this.oldName = this.props.name || ''
  }

  handleChange (e) {
    this.setState({name: e.target.value})
  }

  handleSubmit (e) {
    if (e.which === 13) {
      const name = e.target.value.trim();
      this.props.onSave(name);
      this.setState({name: ''})
    }
  }
  handleBlur () {
    if (this.props.editing) {
      this.props.onSave(this.oldName);
    }
  }

  render () {
    return (
      <div className="todo-input">
        <input placeholder="What do you want to do next?"
               type="text"
               autoFocus="true"
               value={this.state.name}
               onBlur={::this.handleBlur}
               onChange={::this.handleChange}
               onKeyDown={::this.handleSubmit}/>
      </div>
    )
  }
}

export default TodoInput
