import React from 'react'
import { useGlobalContaxt } from './Contaxt'

const Home = () => {
  const myName = useGlobalContaxt()
  return (
    <div>
        <h2>Home {myName}</h2>
    </div>
  )
}

export default Home
