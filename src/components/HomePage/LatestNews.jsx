
const news = [
  {
    title: "New Technology Trends in 2024",
    date: "October 15, 2024",
    imageUrl: "https://via.placeholder.com/400x300.png?text=News+Image+1",
  },
  {
    title: "Global Economy Updates: A Slow Recovery",
    date: "October 14, 2024",
    imageUrl: "https://via.placeholder.com/400x300.png?text=News+Image+2",
  },
  {
    title: "The Rise of Electric Vehicles Worldwide",
    date: "October 13, 2024",
    imageUrl: "https://via.placeholder.com/400x300.png?text=News+Image+3",
  },
  {
    title: "Breakthroughs in AI: What's Next?",
    date: "October 12, 2024",
    imageUrl: "https://via.placeholder.com/400x300.png?text=News+Image+4",
  },
];

const LatestNews = () => {
  return (
    <div className=" bg-[#fef8c7] 2xl:px-20 sm:px-20 xl:px-10 px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 uppercase tracking-wider">
          Latest News
        </h2>
        <p className="text-lg text-gray-500 tracking-wider">
          Stay updated with recent news
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group relative transition-transform duration-300 transform hover:scale-105"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold hover:underline text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

              <div className="absolute top-0 left-0 mt-4 ml-4 bg-gray-900 text-white px-3 py-1 text-xs rounded-full  transition-colors duration-300">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
