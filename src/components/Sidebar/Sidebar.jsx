import React from 'react'
import Category from './Category'
import Price from './Price'
import Color from './Color'

const Sidebar = ({handleChange}) => {
  return (
    <div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Color handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
