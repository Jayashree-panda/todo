import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const todoInput={
  padding:'20px',
  backgroundColor:'#D6EAF8',
  fontSize:'20px',
  marginLeft:'700px',
  marginTop:'200px'
}

const todoSubmit = {
  margin:'10px',
  padding:'20px',
  backgroundColor:'red'
}

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} style={todoInput}/>
        <button type="submit" style={todoSubmit}>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
