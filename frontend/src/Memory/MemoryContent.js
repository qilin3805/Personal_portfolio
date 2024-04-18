import React from 'react';
import Product from './Product';
import '../css/memoryContent.css';

const products = [
  // Add your product details here
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach suhfkabf sdhjfskbf k sdfjbskdbfks sjdfskbdfjks jkfsbkjbskjfb jbfbabfh ', image: 'garden.jpg' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: 'garden.jpg' },
  // ... other products
];

const MemoryContent = () => (
  <div className="product-grid">
    {products.map(product => (
      <Product key={product.id} image={product.image} title={product.title} designer={product.designer} />
    ))}
  </div>
);

export default MemoryContent;
