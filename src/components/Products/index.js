import { Component } from "react";

import {TailSpin} from 'react-loader-spinner'
import Navbar from '../NavBar'
import ProductItemCard from '../ProductItemCard'
import './index.css'


const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Products extends Component{
    state = {productsList : [], apiStatus: apiStatusConstants.initial}

    componentDidMount(){
       this.getProducts()
    }

    getProducts = async () => {

        this.setState({apiStatus: apiStatusConstants.inProgress})
       const url = "https://fakestoreapi.com/products"
       const options = {
        method: 'GET',
       }

       const response = await fetch(url, options)
       const products = await response.json()
       if (response.ok){
        this.setState({productsList: products, apiStatus: apiStatusConstants.success})
       } else{
        this.setState({apiStatus: apiStatusConstants.failure})
       }
    } 

    renderProductsListView = () => {
        const {productsList} = this.state

        return(
            <>
            <div className="Banner">
                <h1 className="banner-heading">Shop Products upto <span>50%</span> Discount</h1>
            </div>
            <ul className="products-list-contaner">
               {productsList.map(eachItem => (
                <ProductItemCard key={eachItem.id} productData={eachItem}/>
               ))}
            </ul>
            </>
        )
    }

    renderFailureView = () => (
        <div className="failure-view">
            <h1>OOP's Something Went Wrong</h1>
            <p>Please Try Again!</p>
        </div>
    )


    renderLoadingView = () => (
        <div className="products-loader-container">
            <TailSpin type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
    )
        
    
 
    checkApiStatus = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderProductsListView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }


    render(){
        return(
            <>
            <Navbar />
            
            <div className="products-main-bg">
                
                {this.checkApiStatus()}
            </div>
            </>
        )
    }
}

export default Products