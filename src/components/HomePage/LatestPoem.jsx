
const poems = [
  {
    title: "Whispers of the Night",
    poet: "John Doe",
    date: "October 10, 2024",
    category: "Nature",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+1",
  },
  {
    title: "Echoes of the Heart",
    poet: "Jane Smith",
    date: "October 9, 2024",
    category: "Love",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+2",
  },
  {
    title: "Dreams Beyond",
    poet: "Samuel Green",
    date: "October 8, 2024",
    category: "Fantasy",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+3",
  },
  {
    title: "The Silent Forest",
    poet: "Emily Rose",
    date: "October 7, 2024",
    category: "Mystery",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+4",
  },
];

const FeaturedPoems = () => {
  return (
    <div className=" bg-gradient-to-b from-[#32658e] sm:px-20 xl:px-10 2xl:px-20 px-4 to-black py-20">
      <div className="text-center mb-12">
        <h2 className="sm:text-5xl text-4xl text-bold sm:font-extrabold text-white mb-4 tracking-widest uppercase">
          Featured Poems
        </h2>
        <p className="text-lg text-gray-300 tracking-wider">Latest & Magical Words</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {poems.map((poem, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden group transition-transform duration-300 transform hover:scale-105"
            >
              {/* Category */}
              <span className="absolute top-4 left-4 bg-[#32658e] text-white py-1 px-3 rounded-full text-sm tracking-wider shadow-lg z-10">
                {poem.category}
              </span>

              <div className="h-60 overflow-hidden">
                <img
                  src={poem.imageUrl}
                  alt={poem.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 text-white relative z-10">
                <h3 className="text-2xl font-bold text-[#63a5dc] group-hover:text-white transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-lg mt-2">
                  By: <span className="font-medium text-gray-300">{poem.poet}</span>
                </p>
                <p className="text-sm mt-1 font-medium text-gray-400">{poem.date}</p>
                
                <div className="mt-4">
                  <button className="bg-[#32658e] text-white font-semibold py-1 px-4 border-[#32658e] border-2 rounded-full hover:bg-transparent transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPoems;
