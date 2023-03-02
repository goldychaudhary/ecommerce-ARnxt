

import {Link} from 'react-router-dom'
import './index.css'

const ProductItemCard = props => {
  const {productData} = props
  const {id, title,image, price, rating} = productData
  const { rate} = rating

  return (
    <Link className="link-component" to={`/products/${id}`}>
      <li className="product-item">
        <img src={image} alt="product" className="thumbnail" />
        <div>
        <h1 className="title">{title}</h1>
        
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className='rating'>{rate}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
          
        </div>
        </div>
    
      </li>
    </Link>
  )
}
export default ProductItemCard