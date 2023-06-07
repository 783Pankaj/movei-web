import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovei = () => {
    const {id} = useParams()
  return (
    <div>
       <h2>Single MOvei {id}</h2>
    </div>
  )
}

export default SingleMovei
