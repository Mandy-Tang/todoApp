import React, { Component } from 'react';
import 'react-date-picker/index.css';
import { DateField, Calendar} from 'react-date-picker';
import style from './style.less';
import moment from 'moment';

class TodoInput extends Component {
  constructor (props, content) {
    super(props, content);
    this.state = {
      name: this.props.name || '',
      time: this.props.time || new Date().getTime()
    };
    this.oldName = this.props.name || ''
  }

  handleChange (e) {
    this.setState({name: e.target.value})
  }

  handleSubmit (e) {
    if (e.which === 13) {
      const time = document.getElementsByClassName('react-date-field__input')[0].value;
      const name = e.target.value.trim();
      this.props.onSave({ name, time });
      this.setState({name})
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
               onKeyDown={::this.handleSubmit}
              />
        <DateField
          dateFormat="YYYY-MM-DD HH:mm:ss"
          defaultValue={this.state.time}
          />
      </div>
    )
  }
}

export default TodoInput
