import React from 'react';
import '../css/memoryContent.css';

const Product = ({ image, title, designer }) => (
    <div className="product">
        <div className="product-img-container">
            <img src={image} alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{designer}</p>
        <p>{designer}</p>
    </div>
  
);

export default Product;
