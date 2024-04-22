import React from 'react';
import storyImage from 'assets/story.jpg'; 

const PictureWithText = ({ imageSrc, altText, text }) => {
  return (
    <div className="picture-with-text-container">
      <div className="left">
        <img src={storyImage} alt={altText} />
      </div>
    </div>
  );
};

const StoryBottom = () => {
  return (
    <div className="story-bottom">
      <PictureWithText
        altText="my self portrait"
      />
    </div>
  );
};

export default StoryBottom; // Ensure that StoryBottom is exported
