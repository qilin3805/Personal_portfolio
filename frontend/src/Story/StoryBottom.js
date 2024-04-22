import React from 'react';

const PictureWithText = ({ imageSrc, altText, text }) => {
  return (
    <div className="picture-with-text-container">
      <div className="left">
        <img src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

const StoryBottom = () => {
  return (
    <div className="story-bottom">
      <PictureWithText
        imageSrc="story.jpg"
        altText="my self portrait"
      />
    </div>
  );
};

export default StoryBottom; // Ensure that StoryBottom is exported
