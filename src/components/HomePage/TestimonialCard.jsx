/* eslint-disable react/prop-types */
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition duration-300 h-[310px] hover:scale-95 mx-4">
      <FaQuoteLeft className="text-3xl text-green-400 opacity-50 mb-4" />
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
        {testimonial.testimonial}
      </p>

      <div className="flex items-center space-x-4 mt-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full border-4 border-green-500"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
        </div>
      </div>

      <div className="flex mt-4 space-x-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
