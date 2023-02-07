import './App.css';
import ProductList from './components/ProductList'
import { useEffect, useState } from 'react'
import api from './services/api'

function App() {

  const [productList, setList] = useState([])

  const getProducts = async() => {
    try {
      const response = await api.get("")
      
      const products = response.data.products
      
      setList(products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <div className="App">
      <ProductList products={productList}/>
    </div>
  );
}

export default App;