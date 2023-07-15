import React from 'react'

const Category = ({handleChange}) => {
  return (
    <div style={{marginLeft:'15%',marginTop:'21%'}}> 
     <h1>Category</h1>
     <div>
     <input  type="radio" value='sneakers' id='sneakers' name='category' onChange={handleChange}/>
     <label htmlFor='sneakers'>sneakers</label>
     </div>
     <div>
     <input type="radio"  value='flats' id='flats' name='category' onChange={handleChange}/>
     <label htmlFor='flats'>flats</label>
     </div>
     <div>
     <input type="radio"  value='sandals' id='sandals' name='category' onChange={handleChange}/>
     <label htmlFor='sandles'>sandals</label>
     </div>
     <div>
     <input type="radio"  value='heels'  id='heels' name='category' onChange={handleChange}/>
     <label htmlFor='heels'>heels</label>
     </div>
    </div>
  )
}

export default Category
