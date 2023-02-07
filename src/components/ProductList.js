import React from 'react'

export default function ProductList(props) {

  console.log(props.products)

  return (
    <div>
        <h1>Produtos</h1>
        <div>
          {
            props.products.map((product) => (
              <div className='product' key={product.id}>
                <h1>{product.title}</h1>
              </div>
            ))
          }
        </div>
    </div>
  )
}
