import React from 'react'
import Uncontrolled from './components/Uncontrolled'
const App = () => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col bg-black text-white '>
        <h1 className='text-4xl p-5 font-semibold'>Controlled and Uncontrolled forms & React-hook-form</h1>
      </div>
      <div>
        <Uncontrolled />
      </div>
    </div>
  )
}

export default App