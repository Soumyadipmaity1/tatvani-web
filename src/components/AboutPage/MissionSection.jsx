
import { FaRocket, FaChartLine, FaHandshake } from 'react-icons/fa';

const MissionSection = () => {
  return (
    <section className="bg-blue-900 dark:bg-gray-800 text-yellow-50 dark:text-yellow-400 rounded-3xl p-10 shadow-2xl transition-all duration-300">
      <div className="flex items-center space-x-6 mb-8">
        <div className="bg-yellow-400 dark:bg-yellow-500 p-4 rounded-full shadow-inner">
          <FaRocket className="text-blue-900 dark:text-gray-800 text-5xl" />
        </div>
        <h2 className="text-3xl font-bold">Our Mission</h2>
      </div>
      <p className="text-lg mb-8">
        Empowering digital innovation through cutting-edge solutions, bridging technology and human needs for a brighter future.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center">
          <FaChartLine className="text-yellow-400 dark:text-yellow-500 text-2xl mr-3" />
          <span>Drive Growth</span>
        </div>
        <div className="flex items-center">
          <FaHandshake className="text-yellow-400 dark:text-yellow-500 text-2xl mr-3" />
          <span>Foster Partnerships</span>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
