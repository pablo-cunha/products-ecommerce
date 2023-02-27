import React from 'react'

export default function ProductList(props) {

  console.log(props.products)

  return (
    <div>
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
