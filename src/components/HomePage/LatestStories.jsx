
const stories = [
  {
    title: "The Enchanted Forest",
    author: "Sarah Connor",
    date: "October 11, 2024",
    category: "Adventure",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Story+Image+1",
  },
  {
    title: "Mystery at the Manor",
    author: "Tom Hardy",
    date: "October 10, 2024",
    category: "Mystery",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Story+Image+2",
  },
  {
    title: "The Forgotten Island",
    author: "Alice Brown",
    date: "October 9, 2024",
    category: "Thriller",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Story+Image+3",
  },
  {
    title: "A Journey Beyond Time",
    author: "Martin Lewis",
    date: "October 8, 2024",
    category: "Sci-Fi",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Story+Image+4",
  },
];

const FeaturedStories = () => {
  return (
    <div className=" bg-white xl:px-10 2xl:px-20 px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 uppercase">
          Featured Stories
        </h2>
        <p className="text-lg text-gray-500 tracking-wide">
          Explore the latest adventures and mysteries
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden group relative transition-transform duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600">
                  By: <span className="font-medium">{story.author}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">{story.date}</p>

                <div className="absolute top-0 right-0 mt-4 mr-4 bg-yellow-400 text-black px-2 py-1 text-xs rounded-full">
                  {story.category}
                </div>
              </div>

              <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-white text-gray-800 font-bold py-2 px-6 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStories;
