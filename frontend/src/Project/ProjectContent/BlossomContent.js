import React from 'react';
import 'css/projectContent/contentBlossom.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function BlossomContent() {
  const navigate = useNavigate();

const handleBack = () => {
  navigate('/Project');
};

const handlePlay = () => {
  const scrollStep = -window.scrollY / 50;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
};

  return (
    <div>
      <section class="parallax-container">
        <div class="text-container">
          <h1>Bloosom</h1>
          <div class="introduction">
            <br/>
            <p class="bold">Design year & Completion Year</p> <span>2019</span><br/>
            <p class="bold">Project location</p> <span>Orchard Village, Aiyuan Town, Shuyang County, Jiangsu Province</span><br/>
            <p class="bold">Category</p> <span>teamwork, wood, steel, eco paper, wood structural system</span>
          </div>
          <br/>
          <p>
            Flowers bloom, the harvest is celebrated. This project was built in the pear garden, 
            take the meaning of “pear flower”. It was designed a ceiling that is stretched 
            like a petal, responding to the original natural state, adjusting the opening angle 
            according to the change of climate and shade, meeting the needs of different functions such as rest and sale, giving the building a new vitality. 
          </p>
        </div>
      </section>


      <section className="buffer">
        <p>
        The  <strong>"micro-intervention"</strong> method reduces the damage to the land and the environment.The materials are environmentally friendly, 
        sheltering from the sun, wind and rain, and equipped with <strong>solar lighting system</strong>, fully respecting the environment 
        and nature, reflecting the adaptability and dynamic life characteristics.

        </p>
      </section>

      <section className="parallax-container parallax-container5">
        <div className="blackcard">
        </div>
      </section>

      <section className="buffer">
        <p>The main structure adopts a flexible <strong>cable tension/traction open space steel-wood composite bionic structure</strong>, 
          which is designed and constructed by our team. The overall structure is mainly composed of ground 
          screw foundation, bottom platform, triangular support system, lightweight movable roof truss, steel-wood joints 
          and suspension cables. The openable and lightweight roof is composed of DuPont paper and wooden frame, and the 
          structure is simple and distinct.</p>
      </section>

      <section className="parallax-container parallax-container2">
        <div className="card">
          <img className="card-img" src="project/blossom/blossom_banner.jpg" alt="Blossom node"/>
        </div>
        <div className="card">
        <img className="card-img" src="project/blossom/bloosom_landscape.jpg" alt="Blossom node"/>
          <h3>the five-petal pear flower will interpret the most perfect geometric logic</h3>
          <br/>
        </div>
        <div className="card">
          <img className="card-img" src="project/blossom/blossom_node.jpg" alt="Blossom node"/>
          <h3>Detail of node</h3>
          <p>
          the overall structure is mainly composed of ground screw foundation, bottom platform, triangular support 
          system, lightweight movable roof truss, steel-wood joints and suspension cables.
          </p>
        </div>
        <div className="card">
          <img className="card-img" src="project/blossom/blossom_people.jpg" alt="Blossom node"/>
        </div>
      </section>

      <section className="buffer">
        <p>
          The functions are mainly based on stop, rest, games and fruit sales, which vary with the pear season and the picking season. 
          The space covered by the pear flower is a place where people gather and communicate. Adopting the most advanced building technology 
          and local materials, adopting the modes of assembly, modularization and Internet customization, which are easy to transport, 
          install and construct, have little damage to land and environment. It tries to intervene in the village in the lightest way, 
          to maximize the authenticity of the village and bring the new modern architectural experience to the village. It takes into 
          account climatic conditions and building performance. The opening and closing of the roof is like the process of opening pears. 
          The sunny days can be opened for sunshade, and the rainy days can be closed to avoid rain. Combined with the solar lighting system, the sky is getting darker and the lights are on, which fully reflects the respect for the nature, environment and culture of the pear garden.
        </p>
      </section>

      <section className="parallax-container parallax-container3">
        <div className="blackcard">
          <h2>Night View</h2>
          <p>
            Blossom is equipped with solar lighting system. When the sky is getting darker, the lights are on.
          </p>
        </div>
        
        <div className="card">
          <img className="card-img" src="project/blossom/blossom_night3.jpg" alt="Blossom node"/>
        </div>
        <div className="blackcard">
        </div>
        <div className="card">
          <img className="card-img" src="project/blossom/blossom_night2.jpg" alt="Blossom node"/>
        </div>
        
      </section>
      

      <section className="parallax-container parallax-container3">
        <div className="blackcard">
        </div>
      </section>

      <section className="blackbuffer"></section>

      <section className="parallax-container parallax-container4">
        <div className="blackcard">
          <div className="ButtonContainer">
            <button className="Button" onClick={handleBack}>Back</button>
            <button className="Button" onClick={handlePlay}>Start</button>
          </div>
        </div>
      </section>

    </div>
    
  );
}

export default BlossomContent;