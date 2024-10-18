import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly px-6 py-20 bg-white space-y-8 lg:space-y-0 lg:space-x-16">

      <motion.div
        className="text-left max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl text-[#3d3b3a] font-bold mb-4">
          Driving Success, One Client At A Time
        </h1>
        <p className="text-gray-700 mb-8">
          Our commitment to excellence has led to remarkable achievements. Here
          are the values that reflect our dedication and the trust of our
          clients. We work tirelessly to ensure your success and satisfaction.    Our commitment to excellence has led to remarkable achievements. Here
          are the values that reflect our dedication and the trust of our
          clients. We work tirelessly to ensure your success and satisfaction.
        </p>
        <Link to="/about" className="bg-[#ff7f57] text-[#3d3b3a] font-bold px-6 py-3 mt-4 hover:bg-white hover:text-orange-600 border-2 shadow-lg border-orange-600 rounded">
          More About Us
        </Link>
      </motion.div>

      <motion.div
        className="max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://via.placeholder.com/400x300"
          alt="Placeholder"
          className="rounded-lg shadow-lg "
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
