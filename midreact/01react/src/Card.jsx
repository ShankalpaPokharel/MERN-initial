import React from 'react'

function Card({
    title="sample title",
    desc="desc sample",
    status="false"

}) {
  return (
    <div className='tcard'>
        <p>Title : {title}</p>
        <hr />
        <p>Descripiton: {desc}</p>
        <p>Status: {status?"True":"False"}</p>
    </div>
  )
}
export default Card