import React, { useState, useEffect } from 'react';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch a random image from Unsplash API
    const fetchRandomImage = async () => {
      try {
        const response = await fetch('[^1^][1]');
        const data = await response.json();
        setImageUrl(data.urls.regular);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Unsplash Image" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomImage;
