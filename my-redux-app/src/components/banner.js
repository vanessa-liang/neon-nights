import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const imageFolderPath = process.env.PUBLIC_URL + "/assets/";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageFolderPath}devotion.jpeg`}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageFolderPath}megan.jpeg`}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageFolderPath}avatar.jpeg`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

render(<ControlledCarousel />);

