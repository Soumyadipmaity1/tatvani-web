import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO at CompanyX",
    testimonial:
      "This service was fantastic! The team was professional, timely, and exceeded my expectations. I highly recommend them.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Director at BrandY",
    testimonial:
      "I’ve never been more impressed with a company. They truly care about their customers and go the extra mile!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Entrepreneur",
    testimonial:
      "Their attention to detail and dedication to delivering quality work really sets them apart. I couldn’t be happier!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Founder of StartupZ",
    testimonial:
      "I’m amazed by their service! They helped us scale up and grow in ways we couldn’t have done on our own.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const TestimonialSlider = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-300 dark:bg-gray-900 xl:px-20 px-5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What Our Clients Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
