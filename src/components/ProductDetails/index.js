import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from  '../NavBar'
import './index.css'

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const getProductDetails = async () => {
            const url = `https://fakestoreapi.com/products/${id}`
            const response = await fetch(url)
            if (response.ok){
                const productDetail = await response.json()
               
                setProductDetail(productDetail);
            }
        }

        getProductDetails();
    }, [id])


   const  renderDetailView = () => (
    <div className="product-details-section-bg">
    <img
      className="product-pic"
      src={productDetail.image}
      alt="product"
    />
    <div className="product-detail-content-bg">
      <h1 className="detail-title">{productDetail.title}</h1>
      <p className="price">Rs {productDetail.price}/- </p>
      <div className="rating-review-container">
        <div className="rating">
          <p>{productDetail.rating.rate}</p>
          <img
            className="star-pic"
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </div>
        <p className="review-para"> Reviews</p>
      </div>
      <p className="description">{productDetail.description}</p>
      <p className="availability">
        Category: {productDetail.category} <br />
        Available: {productDetail.rating.count}
      </p>
      <hr className="hr-line" />
    </div>
  </div>
    )


 
    console.log("productDetail",productDetail)
    return(
        <div>
        <NavBar />
        {productDetail && (
            
            
            renderDetailView()
        )}
        </div>
    )
}

export default ProductDetails
