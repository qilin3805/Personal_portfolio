import React from 'react';
import 'css/projectContent/contentBioswitch.css'; // Import the CSS file

function BioswitchContent() {

  return (
    <div className='bioswitch'>
      <section className="parallax-container">
        <div className="text-container">
          <h1>Bio-Switch</h1>
          <div className="introduction">
            <br/>
            <p className="bold">Design year & Completion Year</p> <span>2022</span><br/>
            <p className="bold">Project location</p> <span>Beijing, China</span><br/>
            <p className="bold">Category</p> <span>individual, bio-sensor, audunio, fritizing</span>
          </div>
          <br/>
          <p>
          Bio-Switch is a recent project allowing people to care for ocean regions with 
          historically low oxygen using living mollusks. The key idea is that the rate and 
          amount of the bivalve mollusks’ opening shells are sensitive detectors of 
          water-dissolved oxygen. Therefore, I wanted to illustrate the story hidden 
          beneath the water by designing a glowing ball floating and rippling on the water.
          </p>
        </div>
      </section>

      <section className="buffer">
        <p>
        In the context of <strong>global deoxygenation</strong>, this project was cost-friendly, with new combinations 
        of biological and digital information and new forms of environmental education. The computers can offer this 
        kind of historical AI with intelligence in nature that has evolved over millions of years to perform sophisticated 
        functions. The combination considered the multiplier effect of the design, even with prototypes. Thus, designers 
        can enhance possibilities for a <strong>kinder, smarter, and less expensive design</strong> prototype in the future.

        </p>
      </section>

      <section className="parallax-container parallax-container5">
        <div className="blackcard">
        </div>
      </section>

      <section className="buffer">
        <p>Ocean regions with historically low oxygen concentrations are expanding and new regions are exhibiting low 
          oxygen conditions. <strong>In 2011 there were around 700 reported sites worldwide affected by low oxygen conditions up 
          from</strong> only 45 before 1960s..</p>
      </section>

      <section className="parallax-container parallax-container2">
        <div className="card">
          <img className="card-img" src={require("assets/project/bioswitch/bioswitch_lowoxygen.jpg")} alt="Blossom node"/>
        </div>
        <div className="card">
        <img className="card-img" src={require("assets/project/bioswitch/bioswitch_miesmuscheln.jpg")} alt="Blossom node"/>
          <h3>shell of bivalves</h3>
          <p>The <strong>rate and amount of openning shells</strong> of bivalves(mussels, clams, and oysters) is sensitive detector of water quality. 
          This is is good for meeting the project budget than electronic digital sensors.</p>
          <br/>
        </div>
        <div className="card">
          <img className="card-img" src={require("assets/project/bioswitch/bioswitch_device.jpg")} alt="Blossom node"/>
          <h3>Circuit System Design</h3>
        </div>
      </section>

      <section className="buffer">
        <p>
        The design prototype is activated by bio-switch. It consists of the mechanical part and circuit part. 
        The mechanical part includes a clam, a woden base, a lever, and 2 coins. The circuit part is in a transparent 
        waterproof ball. The circuit program is controlled by Arduino UNO. Dissolved O2 data influences bio-switch, 
        which controls LED and vibration motor. In this case, what's happens beneath the water can be 
        visualized above.
       </p>
      </section>

      <section className="parallax-container parallax-container3">
        <div className="blackcard">
          <h2>The Photographs Display Of Bio-switch Installation</h2>
          <p>
            When breathing oxygen, shells of bio-switch keep opening. No ripple and light above water. 
            When the external environment deteriorate, bio-switch closes. Lights and ripples are observed.
          </p>
        </div>
        
        <div className="card">
          <img className="card-img" src={require("assets/project/bioswitch/bioswitch_proto1.jpg")} alt="Blossom node"/>
        </div>
        <div className="blackcard">
        </div>
        <div className="card">
          <img className="card-img" src={require("assets/project/bioswitch/bioswitch_proto2.jpg")} alt="Blossom node"/>
        </div>
        <div className="card">
          <img className="card-img" src={require("assets/project/bioswitch/bioswitch_proto3.jpg")} alt="Blossom node"/>
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

export default BioswitchContent;