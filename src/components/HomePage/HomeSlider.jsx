import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const images = [
  'https://via.placeholder.com/1920x1080?text=Image+1',
  'https://via.placeholder.com/1920x1080?text=Image+2',
  'https://via.placeholder.com/1920x1080?text=Image+3',
  'https://via.placeholder.com/1920x1080?text=Image+4',
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + direction + images.length) % images.length
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <TransitionGroup>
        <CSSTransition
          key={currentIndex}
          timeout={1000}
          classNames="slide"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        </CSSTransition>
      </TransitionGroup>
      <button
        onClick={() => handleNavigation(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition-all duration-300 ease-in-out"
      >
        &lt;
      </button>
      <button
        onClick={() => handleNavigation(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition-all duration-300 ease-in-out"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} hover:bg-white transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
