import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Embroidery1 from "../app/assets/img/bordado1.jpg";
import Embroidery2 from "../app/assets/img/bordado2.jpg";
import Embroidery3 from "../app/assets/img/bordado3.jpg";
import Embroidery4 from "../app/assets/img/bordado4.jpg";


const items = [
  {
    src: Embroidery1,
    altText: "Owl Tattoo",
    key: 1,
  },
  {
    src: Embroidery2,
    altText: "Chicken Tattoo",
    key: 2,
  },
  {
    src: Embroidery3,
    altText: "Girl Tattoo",
    key: 3,
  },
  {
    src: Embroidery4,
    altText: "Humming bird Tattoo",
    key: 4,
  },
];

function EmbroideryImagesCarousel(args) {
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
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
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

export default EmbroideryImagesCarousel;