import React, { useState, useEffect, useLayoutEffect } from "react";
import ProfileCard from "./ProfileCard";

const Carousel = () => {
  const cards = [
    { id: 2, name: "Jane Smith", occupation: "Designer" },
    { id: 3, name: "Bob Johnson", occupation: "Product Manager" },
    { id: 4, name: "Alice", occupation: "Engineer" },
    { id: 5, name: "imran", occupation: "Product Manager" },
    { id: 6, name: "arif", occupation: "Engineer" },
    { id: 7, name: "ashik", occupation: "Product Manager" },
    { id: 8, name: "sadik", occupation: "Engineer" },
    { id: 9, name: "sugan", occupation: "Product Manager" },
    { id: 10, name: "suresh", occupation: "Engineer" },
    { id: 11, name: "robot", occupation: "Product Manager" },
    { id: 12, name: "who", occupation: "Engineer" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numItemsToShow, setNumItemsToShow] = useState(4);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const calculateItemsToShow = () => {
    const width = window.innerWidth;
    setScreenWidth(width);

    if (width >= 1536) {
      setNumItemsToShow(4); // Show 4 cards on 2xl screens
    } else if (width >= 1280) {
      setNumItemsToShow(4); // Show 4 cards on xl screens
    } else if (width >= 1024) {
      setNumItemsToShow(4); // Show 4 cards on lg screens
    } else if (width >= 768) {
      setNumItemsToShow(2); // Show 2 cards on md screens
    } else {
      setNumItemsToShow(1); // Show 1 card on sm screens
    }
  };

  // Use useLayoutEffect to ensure that the calculation is synchronous
  useLayoutEffect(() => {
    calculateItemsToShow();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calculateItemsToShow);
    return () => {
      window.removeEventListener("resize", calculateItemsToShow);
    };
  }, []);

  const itemsPerSlide = numItemsToShow;
  const numSlides = Math.ceil(cards.length / itemsPerSlide) || 1;
  const slideIndices = Array.from({ length: numSlides }, (_, index) => index);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < numSlides - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : numSlides - 1
    );
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slideIndices.map((slideIndex) => (
            <div
              key={slideIndex}
              className="carousel-item w-full flex justify-between"
            >
              {cards
                .slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                )
                .map((card) => (
                  <div
                    key={card.id}
                    className={`w-full sm:w-${100 / itemsPerSlide} md:w-${
                      100 / itemsPerSlide
                    } p-4`}
                  >
                    <ProfileCard {...card} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full py-2">
        <button className="btn btn-xs" onClick={prevSlide}>
          &lt;
        </button>
        {screenWidth >= 768 && (
          <>
            <div className="flex gap-2">
              {slideIndices.map((index) => (
                <button
                  key={index}
                  className={`btn btn-xs ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
        <button className="btn btn-xs" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
