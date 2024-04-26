import React from 'react';
import '../css/memoryContent.css';

// Component representing a single product item
const Product = ({ image, title, intro, detail, alt }) => (
    <div className="product">

        <div className="product-img-container">
            <img src={image} alt={alt} />
        </div>

        <h2>{title}</h2>
        <p className='intro'>{intro}</p>
        <p><em>{detail}</em></p>
    </div>
);

export default Product;
