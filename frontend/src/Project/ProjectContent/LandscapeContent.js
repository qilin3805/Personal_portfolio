import React from 'react';
import 'css/projectContent/contentLandscape.css'; // Import the CSS file

function LandscapeContent() {

  return (
    <div className='landscape'>
      <section class="parallax-container">
        <div class="text-container">
          <h1>Landscape Hyperlink</h1>
          <div class="introduction">
            <br/>
            <p class="bold">Design year & Completion Year</p> <span>2020 Dec - 2021 Jun</span><br/>
            <p class="bold">Project location</p> <span>Chongqing, China</span><br/>
            <p class="bold">Category</p> <span>landscape and urban design, Rhino, grasshopper, AutoCad, Vary</span>
          </div>
          <br/>
          <p>
            Facing Chongqing's unique natural environment surrounded by mountains and rivers, the research 
            plans to create an urban landscape in a high-density environment. By establishing a hyperlinked 
            "cave-to-sky" system, the spiritual landscape of literati landscapes will be brought into the world 
            of fireworks, from the spatial and social dimensions. resolve the above contradiction.
          </p>
        </div>
      </section>


      <section className="buffer">
        <p>
            From a macro perspective, "landscape" is an <strong>urban wonder like mountains and rivers</strong>, and is also an 
            ideal pursuit of life that is <strong>"feasible, impressive, livable, and travelable"</strong>; from a micro perspective, 
            "hyperlink" is not only a dreamlike <strong>public space</strong>, but also an overlapping Bringing together different groups to create 
            new opportunities for mutual understanding and encounters.
        </p>
      </section>

      <section className="parallax-container parallax-container5">
        <div className="blackcard">
        </div>
      </section>

      <section className="buffer">
        <p> Click on the video to watch the rendering.</p>
      </section>

      <section className="parallax-container parallax-container2">
        <div className="card">
            <video controls className="card-img">
                <source src={require("assets/project/landscape/landscape_rendering.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="card">
        <img className="card-img" src={require("assets/project/landscape/landscape_section.jpg")} alt="Blossom node"/>
          <h3>design section</h3>
          <p>
            "Connecting mountains and regulating water" starts from the adjustment of infrastructure and addresses the current 
            problems of riverside roads blocking sight lines and hindering accessibility. The design lowers the elevation of 
            Binjiang Expressway by 6 meters, forms a flood control wall through the road box, and creates a three-layer platform 
            on this basis.
          </p>
          <br/>
        </div>
        <div className="card">
          <img className="card-img" src={require("assets/project/landscape/landscape_exposure.jpg")} alt="Blossom node"/>
          <h3>Exploded Section View</h3>
        </div>
      </section>

      <section className="buffer">
        <p>
        The so-called "landscape" is not only the natural terrain surrounded by mountains and rivers, nor the urban wonders 
        like mountains and rivers, but also an ideal pursuit of life that is "feasible, impressive, livable, and travelable".
       </p>
      </section>

      <section className="parallax-container parallax-container3">
        <div className="blackcard">
          <h2>An Artistic Expression</h2>
          <p>
            We follow the example of landscape, and while establishing a cave-heaven system with hyperlinks among people, 
            we also bring the spiritual landscape of Chinese literati landscape into the scenic spots.
          </p>
        </div>
        
        <div className="card">
          <img className="card-img" src={require("assets/project/landscape/landscape_design1.jpg")} alt="Blossom node"/>
        </div>
        <div className="blackcard">
        </div>
        <div className="card">
          <img className="card-img" src={require("assets/project/landscape/landscape_design2.jpg")} alt="Blossom node"/>
        </div>
      </section>
      
      <section className="parallax-container parallax-container3">
        <div className="blackcard">
        </div>
      </section>

      <section className="blackbuffer"></section>

      <section className="parallax-container parallax-container4">
      </section>
    </div>
    
  );
}

export default LandscapeContent;