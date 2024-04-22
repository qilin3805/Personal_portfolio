import React from 'react';
import Product from './Product';
import '../css/memoryContent.css';

const products = [
  // Group1
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Mall.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Beijing.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Umbrella.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_Weissenhofmuseum im Haus Le Corbusier.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group2
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Tea house2.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Chaotianmen.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Sailing vessel.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_St.Benedictusberg Abbey.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group3
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Tea house3.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Chengdu.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Flower.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_Rathaus&Kronungsfestsaal.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group4
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Tea house.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Qinghaihu.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_House.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_Kirche Christi Auferstehung.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group5
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Section.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Annaya.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Grassland.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_Killesberg Tower.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group6
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Parametric.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Bryce.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Moutain.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_Huangshichen.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group7
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Natural museum2.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Pitths.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Cabin.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_elbphi l haroni.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group8
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Natural museum1.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Cleveland.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Still life3.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building_by Richard Serra.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group9
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_blossom.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_CMU.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Still life2.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building Stadtbibliothek Stuttgart2.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
  // Group10
  { id: 1, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/model/Model_Clay.jpg', alt: 'Cup Lamp2222 ' },
  { id: 2, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/scenery/Scenery_Antelope Canyon.jpg', alt: 'Cup Lamp by Paul Loebach' },
  { id: 3, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/art/Art_Still life.JPG', alt: 'Cup Lamp by Paul Loebach' },
  { id: 4, title: 'Cup Lamp', designer: 'Paul Loebach', image: '/memory/building/Building Stadtbibliothek Stuttgart.jpg', alt: 'Cup Lamp by Paul Loebach' },
  
];

const MemoryContent = () => (
  <div className="product-grid">
    {products.map(product => (
      <Product key={product.id} image={product.image} title={product.title} designer={product.designer} alt={product.alt} />
    ))}
  </div>
);

export default MemoryContent;