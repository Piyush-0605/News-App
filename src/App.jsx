import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import NewsBoads from './Components/NewsBoads/NewsBoads'

const App = () => {
  const [category,setCategory]=useState('general')
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoads category={category} />
    </div>
  )
}

export default App
