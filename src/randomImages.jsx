// src/randomImages.js
const randomImage = () => {
    const imageCount = 5; // Number of random images available
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `image${randomIndex}.jpg`; // Update with your image naming convention
  };
  
  export default randomImage;
  