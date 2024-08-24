import Link from 'next/link'
import React from 'react'

function page({params}) {
  return (
    <div>
      <h4>product id is :{params.id}</h4>
      <Link href="/">go to home page</Link>
    </div>
  )
}

export default page
