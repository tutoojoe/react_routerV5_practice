import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const params = useParams()
    console.log(useParams)
  return (
      <div><h1>ProductDetail</h1>
          <p>{params.productId}</p>
          </div>
  )
}

export default ProductDetail