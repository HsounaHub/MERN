import React from 'react'

function content(props) {
  return (
    <textarea value={props.tab.content} cols="30" rows="10"></textarea>
  )
}

export default content