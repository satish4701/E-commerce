import React from 'react'

const Color = ({handleChange}) => {
  return (
    <div style={{marginLeft:'15%',marginTop:'21%'}}> 
     <h1>Color</h1>
     <div>
     <input  type="radio" value='All'  name='Color' onChange={handleChange}/>
     <label htmlFor='All'>All</label>
     </div>
     <div>
     <input type="radio"  value='black'  name='Color' onChange={handleChange}/>
     <label htmlFor='black'>black</label>
     </div>
     <div>
     <input type="radio"  value='green' name='Color' onChange={handleChange}/>
     <label htmlFor='green'>green</label>
     </div>
     <div>
     <input type="radio"  value='blue' name='Color' onChange={handleChange}/>
     <label htmlFor='blue'>blue</label>
     </div>
     <div>
     <input type="radio"  value='red' name='Color' onChange={handleChange}/>
     <label htmlFor='red'>red</label>
     </div>
     <div>
     <input type="radio"  value='white' name='Color' onChange={handleChange}/>
     <label htmlFor='white'>white</label>
     </div>
    
    </div>
  )
}

export default Color
