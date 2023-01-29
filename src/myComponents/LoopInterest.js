import React from 'react'
import { useLongPress } from 'use-long-press'

export const LoopInterest = (props) => {

  
  return (
    <>
    {props.list.map((items, index)=>{
        return (!items? <li key={index} style={{display:'none'}}></li>:<li key={index}><div className="int-img"><img draggable={false} src={items} alt="" width="52px"/></div></li>)
    })}
    </>
  )
}
