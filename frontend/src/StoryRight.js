import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "Story/Confetti";
import StoryBottom from "Story/StoryBottom";
import "css/story.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("Carnegie Mellon University, Pittsburgh, 2023-");
    setMessage2("Master of Science in Computational Design");
    callback();
  };

  const someCallback2 = () => {
    setMessage3("Tsinghua University, Beijin, China, 2021- 2023");
    setMessage4("Master of Architecture");
  };

  const someCallback3 = () => {
    setMessage5("Tongji University, Shanghai China, 2017-2021");
    setMessage6("Bachelor of Architecture");
    fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback); // eslint-disable-next-line
    setObserver(circle2.current, someCallback2); // eslint-disable-next-line
    setObserver(circle3.current, someCallback3); // eslint-disable-next-line
  }, [setObserver]);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          3
        </div>
      </div>
      <div>
        <div className="message"><strong>{message1}</strong></div>
        <div className="message"><em>{message2}</em></div>
      </div>

      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
      </div>
      <div className="message"><strong>{message3}</strong></div>
      <div className="message"><em>{message4}</em></div>

      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          1
        </div>
      </div>
      <div className="message"><strong>{message5}</strong></div>
      <div className="message"><em>{message6}</em></div>

    </div>
  );
};

const StoryRight = () => {

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="rightCV">
      <div className="story-top">
        <div className="self-sketch">
          <StoryBottom/>
        </div>

        <div className="cv">
        <TimelineObserver
          initialColor="#e5e5e5"
          fillColor="black"
          handleObserve={(setObserver) => (
            <Timeline
              callback={onCallback}
              className="timeline"
              setObserver={setObserver}
            />
          )}
        />
        </div>
      </div>
      
      <div className="stub2">
        <h1>MY STORY</h1>
        <h2>RESEARCH EXPERIENCE</h2>
        <li><em><strong>International Research Workshop Digital Futures Shanghai, AI for Carbon Netural Cities</strong>
          , Jun-Jul 2022, Workshop, Optimal design of GAN generative master plan greening, Machine learning, Prof. Jiawei Yao</em>
          </li>

        <li><em><strong>Renewal Design of Waterfront Area in Chaotianmen Area, Chongqing</strong>
          , Sep 2020-Jun 2021, Design and exhibition, Highest Academic Achievement with Graduating Thesis, Prof. Zhendong Wang</em>
        </li>

        <li><em><strong>UIA-CBC International Colleges and Universities Competitive Construction</strong>
          , Feb - Aug 2019, Design and field construction, International Second Prize, Prof. Deng Feng, Zishuo Huang</em>
        </li>

        <li><em><strong>An Intelligent System Solution to Fire Safety Problem in Traditional Lane, Shanghai</strong>
          ,Oct 2018 - Jun 2020, National students' innovation and entrepreneurship training program, Prof. Yanbo Li</em>
        </li>

        <br/>
        <h2>SKILLS</h2>
        <li> Programming
          <p>Java Script, HTML, CSS, React, Java, P5, Python, C Sharp in Unity (ML-Agent)</p>
        </li>

        <li> Design
          <p>IOT, Arduino, Rhinoceros, Grasshopper, SketchUp, AutoCAD</p>
          <p>Unity, Maya, Magic, Zbrush, Keyshot , Enscape, Lumion , V-ray</p>
          <p>Adobe Suite(Photoshop, Illustrator, InDesign, Premiere), Procreate</p>
        </li>
      </div>
    </div>
  );
};

export default StoryRight;
