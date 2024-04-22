import React from 'react';
import Product from './Product';
import '../css/memoryContent.css';

const products = [
  // Group1
  { id: 1, title: 'BUSINESS COMPLEX', intro: 'White resin, black acrylic, Jun 2021', detail:'"I built the model in rhino, and design how to split into small parts to enable 3D printing machine."',
  image: require('assets/memory/model/Model_Mall.jpg'), alt: 'business complex model'},
  { id: 2, title: 'SHOUGANG PARK', intro: 'Feb 2022', detail:'"The scene after the Beijing Winter Olympics."',
  image: require('assets/memory/scenery/Scenery_Beijing.jpg'), alt: 'Photo of Shougang Park' },
  { id: 3, title: 'Umbrella', intro: 'Gouache, Aug 2018', detail:'"Record last night’s dream. I only painted for ten minutes, for fear that I would forget"',
  image: require('assets/memory/art/Art_Umbrella.jpg'), alt: 'Gouache of umbrella' },
  { id: 4, title: 'Weissenhofmuseum im Haus Le Corbusier', intro: 'Stuttgart, Aug 2019', detail:'"A cheerful blue bedroom. Like a scene from a movie directed by Walter Carvalho"',
  image: require('assets/memory/building/Building_Weissenhofmuseum im Haus Le Corbusier.jpg'), alt: 'Weissenhofmuseum im Haus Le Corbusier' },
  
  // Group2
  { id: 5, title: 'Teahouse in the woods', intro: 'Pine, kraft paper, Jan 2018', detail:'"My fisrt hand made model since start learning design!"',
  image: require('assets/memory/model/Model_Tea house2.jpg'), alt: 'Model of Teahouse in the woods' },
  { id: 6, title: 'Foggy city', intro: 'Chaotianmen, Chongqing', detail:'"City ​​that gets up early"',
  image: require('assets/memory/scenery/Scenery_Chaotianmen.jpg'), alt: 'Foggy city' },
  { id: 7, title: 'Sailing vessel', intro: 'Gouache, Sep 2018', detail:"",
  image: require('assets/memory/art/Art_Sailing vessel.JPG'), alt: 'Gouache of Sailing vessel' },
  { id: 8, title: 'St.Benedictusberg Abbey', intro: 'After prayer, the monastery, Aug 2019', detail:'"Another Corbusier-designed building discovered in a small village on the German-French border"',
  image: require('assets/memory/building/Building_St.Benedictusberg Abbey.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group3
  { id: 9, title: 'Teahouse in the woods', intro: 'Pine, kraft paper, Jan 2018', detail:'"My fisrt hand made model since start learning design!"',
  image: require('assets/memory/model/Model_Tea house3.jpg'), alt: 'Model of Teahouse in the woods' },
  { id: 10, title: 'West Village Courtyard', intro: 'From four-story roof, Mar 2021', detail:'"Renovated from an abandoned factory in Chengdu"',
  image: require('assets/memory/scenery/Scenery_Chengdu.jpg'), alt: 'West Village Courtyard' },
  { id: 11, title: 'Flowers', intro: 'Watercolor painting, May 2018', 
  image: require('assets/memory/art/Art_Flower.JPG'), alt: 'Watercolor of Flower' },
  { id: 12, title: 'Rathaus & Kronungsfestsaal', intro: 'Krone, Aug 2018', detail:'"my partner and I sang songs here and the sound effect was very beautiful"',
  image: require('assets/memory/building/Building_Rathaus&Kronungsfestsaal.jpg'), alt: 'Rathaus & Kronungsfestsaal' },
  
  // Group4
  { id: 13, title: 'Teahouse in the woods', intro: 'Pine, kraft paper, Jan 2018', detail:'"My fisrt hand made model since start learning design!"',
  image: require('assets/memory/model/Model_Tea house.jpg'), alt: 'Model of Teahouse in the woods' },
  { id: 14, title: 'Qinghaihu', intro: 'Qinghai, Jul 2021', detail:'"At an altitude of 4,000+ meters, I saw free-flying seabirds and boundless saltwater lakes."',
  image: require('assets/memory/scenery/Scenery_Qinghaihu.jpg'), alt: 'Qinghaihu' },
  { id: 15, title: 'Liyuan sketching', intro: 'Sketching, two hours, Aug 2019', 
  image: require('assets/memory/art/Art_House.jpg'), alt: 'Liyuan sketching' },
  { id: 16, title: 'Kirche Christi Auferstehung', intro: 'Catholic church in the district of Lindenthal in Cologne, Sep 2019', 
  image: require('assets/memory/building/Building_Kirche Christi Auferstehung.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group5
  { id: 17, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('assets/memory/model/Model_Section.JPG'), alt: 'Cup Lamp2222 ' },
  { id: 18, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/scenery/Scenery_Annaya.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 19, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/art/Art_Grassland.JPG'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 20, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/building/Building_Killesberg Tower.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group6
  { id: 21, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/model/Model_Parametric.jpg'), alt: 'Cup Lamp2222 ' },
  { id: 22, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/scenery/Scenery_Bryce.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 23, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/art/Art_Moutain.JPG'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 24, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/building/Building_Huangshichen.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group7
  { id: 25, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/model/Model_Natural museum2.jpg'), alt: 'Cup Lamp2222 ' },
  { id: 26, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/scenery/Scenery_Pitths.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 27, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/art/Art_Cabin.JPG'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 28, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/building/Building_elbphi l haroni.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group8
  { id: 29, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/model/Model_Natural museum1.jpg'), alt: 'Cup Lamp2222 ' },
  { id: 30, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/scenery/Scenery_Cleveland.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 31, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/art/Art_Still life3.JPG'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 32, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/building/Building_by Richard Serra.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group9
  { id: 33, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/model/Model_blossom.jpg'), alt: 'Cup Lamp2222 ' },
  { id: 34, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/scenery/Scenery_CMU.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 35, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/art/Art_Still life2.JPG'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 36, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/building/Building Stadtbibliothek Stuttgart2.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group10
  { id: 37, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/model/Model_Clay.JPG'), alt: 'Cup Lamp2222 ' },
  { id: 38, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/scenery/Scenery_Antelope Canyon.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 39, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/art/Art_Still life.JPG'), alt: 'Cup Lamp by Paul Loebach' },
  { id: 40, title: 'Cup Lamp', intro: 'Paul Loebach', image: require('../assets/memory/building/Building Stadtbibliothek Stuttgart.jpg'), alt: 'Cup Lamp by Paul Loebach' },
];

const MemoryContent = () => (
  <div className="product-grid">
    {products.map(product => (
      <Product key={product.id} image={product.image} title={product.title} intro={product.intro} detail={product.detail} alt={product.alt} />
    ))}
  </div>
);

export default MemoryContent;
