// import React from 'react'

// export default function Abc() {
//   return (
//     <div>Hi</div>
//   )
// }

import React from 'react'

function Abc({title="title",desc="desc"}) {
  return (
    <>
     <div>Abc</div>
     <p>Title:{title}</p>
     <p>Desc:{desc}</p>
    </>
   

  )
}

export default Abc