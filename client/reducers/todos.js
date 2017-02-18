
import { handleActions } from 'redux-actions'

const initialState = [
  {
    id: 0,
    name: 'add TodoInput Component',
    done: false,
    time: 1487391601472
  },
  {
    id: 1,
    name: 'add TodoItem Component',
    done: true,
    time: 1487391601472
  }
];

export default handleActions({
  'ADD_TODO' (state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      name: action.payload.name,
      time: action.payload.time,
      done: false
    }, ...state]
  },
  'UPDATE_TODO' (state, action) {
    return state.map(todo => {
      return todo.id === action.payload.id ? {...todo, name: action.payload.name} : todo
    })
  },
  'DELETE_TODO' (state, action) {
    return state.filter(todo => todo.id !== action.payload.id )
  },
  'COMPLETE_TODO' (state, action) {
    return state.map(todo => {
      return todo.id === action.payload.id ? {...todo, done: !todo.done} : todo
    })
  }
}, initialState)
