import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart } = props
    const { name, price, seller, img, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'><p>Add to cart</p></button>
        </div>
    );
};

export default Product;