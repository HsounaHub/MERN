import React from 'react'

function Tabs(props) {
  return (
    <button onClick={()=>{
      return props.setactivetab(props.idx)
    }}>{props.item.label}
    </button>
  )
}

export default Tabs