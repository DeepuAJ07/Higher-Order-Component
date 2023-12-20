import React from 'react'

function Count(props) {
  return (
   <button onClick={props.increment}>Clicked {props.count} times</button>
  )
}

export default Count