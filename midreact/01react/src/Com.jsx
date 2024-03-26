import React from 'react'

function Com({
    title="sample title",
    desc="desc sample"
}) {
  return (
    <div className='tcard'>
        <p>Title : {title}</p>
        <p>Descripiton: {desc}</p>
        
    </div>
  )
}
export default Com


// import React from 'react'

// function Abc({title="title",desc="desc"}) {
//   return (
//     <>
//      <div>Abc</div>
//      <p>Title:{title}</p>
//      <p>Desc:{desc}</p>
//     </>
   

//   )
// }

// export default Abc