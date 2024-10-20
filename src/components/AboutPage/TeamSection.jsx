import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', image: 'https://randomuser.me/api/portraits/men/1.jpg', quote: "Innovation is our driving force." },
    { name: 'Jane Smith', role: 'CTO', image: 'https://randomuser.me/api/portraits/women/1.jpg', quote: "Technology should empower humanity." },
    { name: 'Mike Johnson', role: 'Lead Developer', image: 'https://randomuser.me/api/portraits/men/2.jpg', quote: "Code can change the world." },
    { name: 'Emily Brown', role: 'UX Designer', image: 'https://randomuser.me/api/portraits/women/2.jpg', quote: "Design is about solving problems." },
  ];

  return (
    <section className="sm:py-16 py-14 px-4 sm:px-0">
      <h2 className="text-5xl font-bold text-blue-900 dark:text-yellow-400 mb-16 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-blue-900 dark:from-yellow-500 dark:to-gray-700 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-blue-50 dark:bg-gray-800 rounded-3xl p-6 space-y-6 transform group-hover:scale-105 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-yellow-400">{member.name}</h3>
                <p className="text-yellow-600 dark:text-yellow-500 mt-1 font-medium">{member.role}</p>
              </div>
              {/* <div className="relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-yellow-400 dark:text-yellow-500 opacity-50 text-4xl" />
                <p className="text-blue-800 dark:text-gray-300 italic pl-10 pr-4">"{member.quote}"</p>
              </div> */}
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-900 dark:text-yellow-400 hover:text-yellow-400 dark:hover:text-yellow-50 transition duration-300">
                  <FaLinkedin size={24} />
                </a>
                {/* <a href="#" className="text-blue-900 dark:text-yellow-400 hover:text-yellow-400 dark:hover:text-yellow-500 transition duration-300">
                  <FaTwitter size={24} />
                </a> */}
                <a href="#" className="text-blue-900 dark:text-yellow-400 hover:text-yellow-400 dark:hover:text-yellow-50 transition duration-300">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
