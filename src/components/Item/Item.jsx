import "./Item.css"
import React from 'react'

const Item = (props) => {
  return (
    <div className="contain">
    <img src={props.image}></img>
    <div className="des">
        <span>GANT</span>
        <h5 className='name'>{props.name}</h5>
        <div className="star">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        </div>
        <h4>Rs.{props.price}</h4>
    </div> 
    <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
    </div>
  )
}

export default Item

