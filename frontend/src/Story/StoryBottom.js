import React from 'react';

const PictureWithText = ({ imageSrc, altText, text }) => {
  return (
    <div className="picture-with-text-container">
      <div className="left">
        <img src={imageSrc} alt={altText} />
      </div>
      {/* <div className="right">
        <p>{text}</p>
      </div> */}
    </div>
  );
};

const StoryBottom = () => {
  return (
    <div className="story-bottom">
      <PictureWithText
        imageSrc="story.jpg"
        altText="Description of the image"
        // text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default StoryBottom; // Ensure that StoryBottom is exported
