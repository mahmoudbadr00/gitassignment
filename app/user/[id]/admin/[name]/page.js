import React from 'react'

function page({params}) {
  return (
    <div>
      <h3>user id:{params.id} admin name :{params.name}</h3>
    </div>
  )
}

export default page
