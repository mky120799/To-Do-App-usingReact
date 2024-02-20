import React from 'react'

export default function ToDoItem(props) {
  return (
    <div>
        <li className='todo-item'>
            <span>
          { props.completed? <></> : <input type="checkbox"/> }
            <span>{props.text}</span>
            </span>
            <p>....</p>
        </li>
    </div>
  )
}
