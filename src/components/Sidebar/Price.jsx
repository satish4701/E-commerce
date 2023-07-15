import React from 'react'

const Price = ({handleChange}) => {
  return (
    <div style={{marginLeft:'15%',marginTop:'21%'}}> 
     <h1>Price</h1>
     <div>
     <input  type="radio" value='50'  name='Price' onChange={handleChange}/>
     <label htmlFor='sneakers'>0$ - 50$</label>
     </div>
     <div>
     <input type="radio"  value='100'  name='Price' onChange={handleChange}/>
     <label htmlFor='flats'>50$ - 100$</label>
     </div>
     <div>
     <input type="radio"  value='150' name='Price' onChange={handleChange}/>
     <label htmlFor='sandles'>100$ - 150$</label>
     </div>
    
    </div>
  )
}

export default Price
