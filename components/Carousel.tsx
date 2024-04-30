// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

// https://markus.oberlehner.net/blog/super-simple-progressively-enhanced-carousel-with-css-scroll-snap/

import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

export const Carousel = ({
  id = "carousel",
  imgs = defaultImgs,
  autoplay = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lockTimer = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const makeImageId = (i: number) => id + "_" + i;

  const scrollCarouselToIndex = (i: number) => {
    const index = i % imgs.length;
    scrollCarouselToSelector("#" + makeImageId(index));
    return index;
  };

  const scrollCarouselToSelector = (selector: string) => {
    if (!carouselRef.current) return;
    scrollToSelector(carouselRef.current, selector);
  };

  useEffect(() => {
    const nextSlide = () => {
      if (!autoplay) return;
      if (lockTimer.current > 0) {
        lockTimer.current--;
        return;
      }

      setActiveIndex((prevIndex) => scrollCarouselToIndex(prevIndex + 1));
    };
    const intervalId = setInterval(nextSlide, autoplay);
    return () => clearInterval(intervalId);
  }, [imgs]);

  return (
    <div className="carousel relative">
      <div className="images noscrollbar" ref={carouselRef}>
        {imgs.map(({ src, alt }, i) => (
          <div key={i} id={makeImageId(i)} className="item">
            <img src={src} alt={alt} className="image" />
          </div>
        ))}
      </div>
      <div className="controls">
        {imgs.map(({ src, alt }, i) => (
          <a
            key={i}
            href={"#" + makeImageId(i)}
            className={activeIndex === i ? "active control" : "control"}
            onClick={(event) => {
              event.preventDefault();
              lockTimer.current = 3;
              setActiveIndex(scrollCarouselToIndex(i));
            }}
          ></a>
        ))}
      </div>
    </div>
  );
};

const defaultImgs = [
  { src: "https://picsum.photos/300/200?1", alt: "image 1" },
  { src: "https://picsum.photos/300/200?2", alt: "image 2" },
  { src: "https://picsum.photos/300/200?3", alt: "image 3" },
];

const scrollToSelector = (parent: HTMLElement, selector: string) => {
  const slide: HTMLElement | null = document.querySelector(selector);
  if (!slide) return;
  scrollToElement(parent, slide);
};

const scrollToElement = (parent: HTMLElement, child: HTMLElement) => {
  parent.scrollTo({
    left: child.offsetLeft,
    top: child.offsetTop,
    behavior: "smooth",
  });
};
