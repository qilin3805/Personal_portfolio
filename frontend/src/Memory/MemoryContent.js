import React from 'react';
import Product from './Product';
import '../css/memoryContent.css';

// Create memory products array
const products = [
  // Group1
  { id: 1, title: 'Businiss complex', intro: 'White resin, black acrylic, Jun 2021', detail:'"I built the model in rhino, and design how to split into small parts to enable 3D printing machine."',
  image: require('assets/memory/model/Model_Mall.jpg'), alt: 'business complex model'},
  { id: 2, title: 'SHOUGANG PARK', intro: 'Feb 2022', detail:'"The scene after the Beijing Winter Olympics."',
  image: require('assets/memory/scenery/Scenery_Beijing.jpg'), alt: 'Photo of Shougang Park in winnter' },
  { id: 3, title: 'Umbrella', intro: 'Gouache, Aug 2018', detail:'"Record last night’s dream. I only painted for ten minutes, for fear that I would forget"',
  image: require('assets/memory/art/Art_Umbrella.jpg'), alt: 'Gouache of colorful umbrellas' },
  { id: 4, title: 'Weissenhofmuseum im Haus Le Corbusier', intro: 'Stuttgart, Aug 2019', detail:'"A cheerful blue bedroom. Like a scene from a movie directed by Walter Carvalho"',
  image: require('assets/memory/building/Building_Weissenhofmuseum im Haus Le Corbusier.jpg'), alt: 'Weissenhofmuseum im Haus designed by Le Corbusier' },
  
  // Group2
  { id: 5, title: 'Teahouse in the woods', intro: 'Pine, kraft paper, Jan 2018', detail:'"My fisrt hand made model since start learning design!"',
  image: require('assets/memory/model/Model_Tea house2.jpg'), alt: 'Model of Teahouse in the woods perspective' },
  { id: 6, title: 'Foggy city', intro: 'Chaotianmen, Chongqing', detail:'"City ​​that gets up early"',
  image: require('assets/memory/scenery/Scenery_Chaotianmen.jpg'), alt: 'The morning fog in Chongqing city' },
  { id: 7, title: 'Sailing vessel', intro: 'Gouache, Sep 2018', detail:"",
  image: require('assets/memory/art/Art_Sailing vessel.JPG'), alt: 'Gouache of Sailing vessel' },
  { id: 8, title: 'St.Benedictusberg Abbey', intro: 'After prayer, the monastery, Aug 2019', detail:'"Another Corbusier-designed building discovered in a small village on the German-French border"',
  image: require('assets/memory/building/Building_St.Benedictusberg Abbey.jpg'), alt: 'St.Benedictusberg Abbey designed by Corbusier' },
  
  // Group3
  { id: 9, title: 'Teahouse in the woods', intro: 'Pine, kraft paper, Jan 2018', detail:'"My fisrt hand made model since start learning design!"',
  image: require('assets/memory/model/Model_Tea house3.jpg'), alt: 'Model of Teahouse in the woods bird view' },
  { id: 10, title: 'West Village Courtyard', intro: 'From four-story roof, Mar 2021', detail:'"Renovated from an abandoned factory in Chengdu"',
  image: require('assets/memory/scenery/Scenery_Chengdu.jpg'), alt: 'West Village Courtyard seen from the roof' },
  { id: 11, title: 'Flowers', intro: 'Watercolor painting, May 2018', 
  image: require('assets/memory/art/Art_Flower.JPG'), alt: 'Watercolor of Flower' },
  { id: 12, title: 'Rathaus & Kronungsfestsaal', intro: 'Krone, Aug 2018', detail:'"my partner and I sang songs here and the sound effect was very beautiful"',
  image: require('assets/memory/building/Building_Rathaus&Kronungsfestsaal.jpg'), alt: 'Rathaus & Kronungsfestsaal lobby' },
  
  // Group4
  { id: 13, title: 'Teahouse in the woods', intro: 'Pine, kraft paper, Jan 2018', detail:'"My fisrt hand made model since start learning design!"',
  image: require('assets/memory/model/Model_Tea house.jpg'), alt: 'Model of Teahouse in the woods fascade' },
  { id: 14, title: 'Qinghaihu', intro: 'Qinghai, Jul 2021', detail:'"At an altitude of 4,000+ meters, I saw free-flying seabirds and boundless saltwater lakes."',
  image: require('assets/memory/scenery/Scenery_Qinghaihu.jpg'), alt: 'Telephone pole besides Qinghaihu' },
  { id: 15, title: 'Liyuan sketching', intro: 'Sketching, two hours, Aug 2019', 
  image: require('assets/memory/art/Art_House.jpg'), alt: 'Liyuan sketching of two houses' },
  { id: 16, title: 'Kirche Christi Auferstehung', intro: 'Catholic church in the district of Lindenthal in Cologne, Sep 2019', 
  image: require('assets/memory/building/Building_Kirche Christi Auferstehung.jpg'), alt: 'Cup Lamp by Paul Loebach' },
  
  // Group5
  { id: 17, title: 'Clay', intro: 'Space transfer, Fall 2017', detail: '"Translating a certain organ into space, I studied the spatial relationship of the ear canal."',
  image: require('assets/memory/model/Model_Clay.JPG'), alt: 'Model photo made of clay' },
  { id: 18, title: 'Bryce', intro: 'After snowy, Spring 2024', detail:'"The first ray of sunshine of the new year is ushered in Bryce."',
  image: require('../assets/memory/scenery/Scenery_Bryce.jpg'), alt: 'A tree in Bryce after snow' },
  { id: 19, title: 'Grassland', intro: 'Gouache, Sep 2019', detail:'',
  image: require('../assets/memory/art/Art_Grassland.JPG'), alt: 'Grassland gouache with remote moutain' },
  { id: 20, title: 'Stadtbibliothek Stuttgart', intro: 'Stuttgart, Aug 2019', detail:'"The most peaceful place for reading."',
  image: require('../assets/memory/building/Building Stadtbibliothek Stuttgart2.jpg'), alt: 'Stadtbibliothek Stuttgart hall' },
  
  // Group6
  { id: 21, title: 'Parametric Design', intro: 'Nylon, 3D printing, Jun 2022', 
  image: require('../assets/memory/model/Model_Parametric.jpg'), alt: '3D printing model of Parametric Design' },
  { id: 22, title: 'Cleveland', intro: 'After sunset, Dec 2023', detail:'"All the way north until the lake."',
  image: require('../assets/memory/scenery/Scenery_Cleveland.jpg'), alt: 'Water and light tower in Cleveland' },
  { id: 23, title: 'distant mountains', intro: 'Gouache, Sep 2019', detail:'"Tree shadows whirling"',
  image: require('../assets/memory/art/Art_Moutain.JPG'), alt: 'Moutain gouache with trees' },
  { id: 24, title: 'Huangshi chen', intro: 'Beijing, Oct 2022', detail:'"Tree shadows whirling"',
  image: require('../assets/memory/building/Building_Huangshichen.jpg'), alt: 'Tree shadow on the wall of Huangshi chen' },
];

// MemoryContent component render all the product items in the products array
const MemoryContent = () => (
  <div className="product-grid">
    {products.map(product => (
      <Product key={product.id} image={product.image} title={product.title} intro={product.intro} detail={product.detail} alt={product.alt} />
    ))}
  </div>
);

export default MemoryContent;
