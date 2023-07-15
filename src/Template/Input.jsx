import React from 'react'

const Input = ({name , placeholder , type}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} name={name} />
    </>
  )
}

export default Input
