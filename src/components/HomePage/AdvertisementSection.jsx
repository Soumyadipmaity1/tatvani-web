const shops = [
  {
    name: "ABC Grocery Store",
    address: "123 Main St, Springfield",
    image: "https://via.placeholder.com/300",
    description: "A bustling local grocery store with a wide selection of fresh fruits, vegetables, and household essentials. Known for its customer-friendly service and quality produce sourced from local farmers.",
    mapLink: "https://goo.gl/maps/ABCStoreLink"
  },
  // {
  //   name: "XYZ Hardware",
  //   address: "456 Elm St, Springfield",
  //   image: "https://via.placeholder.com/300",
  //   description: "Your one-stop shop for all things DIY and home improvement. Whether you're fixing a pipe or building furniture, XYZ Hardware has tools and materials for every project.",
  //   mapLink: "https://goo.gl/maps/XYZHardwareLink"
  // },
  // {
  //   name: "Sunshine Bakery",
  //   address: "789 Oak St, Springfield",
  //   image: "https://via.placeholder.com/300",
  //   description: "Sunshine Bakery is renowned for its handcrafted pastries, cakes, and breads. Using organic ingredients, this bakery offers an unforgettable experience with its fresh, oven-baked treats.",
  //   mapLink: "https://goo.gl/maps/SunshineBakeryLink"
  // },
  // {
  //   name: "Green Leaf Cafe",
  //   address: "101 Pine St, Springfield",
  //   image: "https://via.placeholder.com/300",
  //   description: "A trendy cafe offering a variety of vegan, organic, and gluten-free options. Green Leaf Cafe is the perfect spot for coffee lovers and health-conscious diners alike.",
  //   mapLink: "https://goo.gl/maps/GreenLeafCafeLink"
  // }
];

const AdvertisementSection = () => {
  return (
    <div className='py-20'> 
    <div className="text-center mb-12">
    <h2 className="sm:text-5xl text-4xl text-bold sm:font-extrabold text-[#3d3b3a] mb-4 tracking-widest uppercase">
Advertisement    </h2>
    {/* <p className="text-lg text-[#32658e] tracking-wider">Local Shops</p> */}
  </div>

    <div className="flex flex-col gap-8 max-w-5xl mx-auto p-6">
      {shops.map((shop, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#fef8c7] to-[#fef8c7] text-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-95 hover:shadow-lg border-2 border-[#3d3b3a]"
          style={{ minHeight: '300px' }}
        >
          <img
            src={shop.image}
            alt={shop.name}
            className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow-lg"
          />
          <div className="p-6 flex flex-col justify-between w-full md:w-2/3 space-y-4">
            <div>
              <h2 className="text-3xl text-[#3d3b3a] font-extrabold mb-2">{shop.name}</h2>
              <p className="text-lg text-[#3d3b3a] font-semibold">{shop.address}</p>
              <p className="mt-3 text-sm text-[#3d3b3a] leading-relaxed">{shop.description}</p>
            </div>
            <a
              href={shop.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            className="mt-4 hover:text-[#000] text-[#000] hover:underline transition-colors duration-300"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AdvertisementSection;
