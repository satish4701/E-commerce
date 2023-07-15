import './App.css'
import Card from './components/Card/Card'
import Nav from './components/Navbar/Nav'
import Recommended from './components/Recommended/Recommended'
import Sidebar from './components/Sidebar/Sidebar'
import { AiOutlineHome } from 'react-icons/ai'
import Data from './Db/Data'
import { useState } from 'react'
import Result from './components/Result/Result'





function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null)

  // input change
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  //filter data
  // const filterData = Data.filter((product) => {
  //   product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // })

  const filteredItems = Data.filter((product) => { return(
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )}
  );

  // sidebar radio btn click
  const handleChange = (event) => {
    console.log(event.target.value)
    setSelected(event.target.value)
  }
   
  //main function
  const filterProduct = (data, selected, query) => {

    let filterNewData = data;
    
    // query
    if (query) {
      filterNewData = filteredItems
      console.log(filterNewData)
    }

    if (selected) {
      filterNewData = filterNewData.filter(({ category, color, company, newPrice, title }) => {
        return(
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
        )

      })
    }

    return (
      filterNewData.map(
        ({ img, title, star, reviews, prevPrice, newPrice }) => {
          return(
            <Card key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice} />
            )
        })
       
    )
  }
 
  const result = filterProduct(Data, selected, query)
 
  return (
    <>
      <div className="hero_layout">
        <div className="left">
          <div className="home_icon">
            <AiOutlineHome />
          </div>
          <Sidebar handleChange={handleChange} />
        </div>
        <div className="right">
          <Nav handleInputChange={handleInputChange} />
          <Recommended />
          <Result result={result} />
        </div>
      </div>

    </>
  )
}

export default App
