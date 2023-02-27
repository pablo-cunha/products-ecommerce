import './App.css';
import ProductList from './components/ProductList'
import { useEffect, useState } from 'react'
import api from './services/api'
import Header from './components/Header';

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
      <Header/>
      <ProductList products={productList}/>
    </div>
  );
}

export default App;