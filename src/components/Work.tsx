import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

/* Array containing only images for slideshow */
const projects = [
  {
    image: "/images/AI.jpeg",
  },
  {
    image: "/images/Photo1.jpeg",
  },
  {
    image: "/images/Photo2.jpeg",
  },
  {
    image: "/images/HMS1.jpeg",
  },
  {
    image: "/images/HMS2.jpeg",
  },
  {
    image: "/images/IPS.jpeg",
  },
];

const Work = () => {
  /* Stores current slide index */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Prevents rapid clicking during animation */
  const [isAnimating, setIsAnimating] = useState(false);

  /* Function to move to a specific slide */
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return; // stop if animation running
      setIsAnimating(true); // start animation
      setCurrentIndex(index); // update slide
      setTimeout(() => setIsAnimating(false), 500); // animation duration
    },
    [isAnimating]
  );

  /* Move to previous slide */
  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  /* Move to next slide */
  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">

          {/* Left Arrow */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous image"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          {/* Right Arrow */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next image"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Carousel Container */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">

                    {/* Image Section */}
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={`Photo ${index + 1}`}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;