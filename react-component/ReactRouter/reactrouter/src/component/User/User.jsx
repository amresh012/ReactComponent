// import React from 'react'

import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className="text-white h-12 w-full bg-blue-400 text-center text-xl font-bold py-2">User:{userid}</div>
  )
}

export default User