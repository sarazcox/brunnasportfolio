import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import Tattoo1 from "../app/assets/img/tattoo1.jpg";
import Tattoo2 from "../app/assets/img/tattoo2.jpg";
import Tattoo3 from "../app/assets/img/tattoo3.jpg";
import Tattoo4 from "../app/assets/img/tattoo4.jpg";
import Tattoo5 from "../app/assets/img/tattoo5.jpg";
import Tattoo6 from "../app/assets/img/tattoo6.jpg";
import Tattoo7 from "../app/assets/img/tattoo7.jpg";
import Tattoo8 from "../app/assets/img/tattoo8.jpg";



const items = [
  {
    src: Tattoo1,
    altText: "Owl Tattoo",
    key: 1,
  },
  {
    src: Tattoo2,
    altText: "Chicken Tattoo",
    key: 2,
  },
  {
    src: Tattoo3,
    altText: "Girl Tattoo",
    key: 3,
  },
  {
    src: Tattoo4,
    altText: "Humming bird Tattoo",
    key: 4,
  },
  {
    src: Tattoo5,
    altText: "Leopard Tattoo",
    key: 5,
  },
  {
    src: Tattoo6,
    altText: "Tree Tattoo",
    key: 6,
  },
  {
    src: Tattoo7,
    altText: "Humming bird Tattoo",
    key: 7,
  },
  {
    src: Tattoo8,
    altText: "Humming bird Tattoo",
    key: 8,
  },
];

function TattooImagesCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: "500px" }} />
        
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
const originalError = console.error;
console.error = (...args) => {
  if (args[0] && args[0].includes('Legacy context API')) {
    return;
  }
  originalError(...args);
}; 
export default TattooImagesCarousel;
