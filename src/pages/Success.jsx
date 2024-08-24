import React from 'react'
import success from '../assets/success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <>
      <div className='h-screen bg-pink-100 mw-auto flex justify-center items-center flex-col'>
      <img className='rounded-lg' src={success} alt='success' height={300} width={300}/>
      <Link to='/'><button className='w-28 h-10 rounded-lg bg-yellow-500 text-xl text-bold mt-3'>Home Page</button></Link>
    </div>
    </>
  )
}

export default Success