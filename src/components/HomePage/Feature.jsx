import { FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa'; 

const features = [
  {
    id: 1,
    icon: <FaCogs />, 
    title: 'High Customization',
    description: 'Tailor every aspect of your experience with our easy-to-use tools and flexible options.',
  },
  {
    id: 2,
    icon: <FaShieldAlt />, 
    title: 'Robust Security',
    description: 'Keep your data safe with our advanced security protocols and features.',
  },
  {
    id: 3,
    icon: <FaChartLine />, 
    title: 'Performance Analytics',
    description: 'Get insights into performance with real-time analytics to make better decisions.',
  },
  {
    id: 4,
    icon: <FaShieldAlt />, 
    title: 'Data Protection',
    description: 'Ensure your information is always secure and protected from threats.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#c9e6e9] py-16 px-4 md:px-20">
      <div className="mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#007A8C] mb-8">
          Key Features
        </h2>
        <p className="text-lg md:text-xl text-[#3D4A4F] mb-12">
          Discover the powerful tools and features we offer to make your experience unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="icon mb-6 text-center text-5xl text-[#40c8c8]">
                {feature.icon} 
              </div>
              <h3 className="text-2xl font-bold text-[#8aefff] mb-4">{feature.title}</h3>
              <p className="text-md text-[#c6efff]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
