import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, link: "#" },
  { icon: FaLinkedinIn, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaInstagram, link: "#" },
];

const quickLinks = [
  { label: "Mynimalistic", href: "#" },
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Discovery", href: "#" },
];

const serviceLinks = [
  { label: "Poetry", href: "#" },
  { label: "News", href: "#" },
  { label: "Short Stories", href: "#" },
  { label: "Advertisement", href: "#" },
];

const blogPosts = [
  {
    image: "path-to-blog-image",
    title: "We provide a range of IT solutions",
    date: "January 11, 2024",
  },
  {
    image: "path-to-blog-image",
    title: "IT solutions enhance efficiency",
    date: "January 11, 2024",
  },
];

const contacts = [
  { icon: FaPhoneAlt, text: "+1234567890" },
  { icon: FaEnvelope, text: "mynimalistic@gmail.com" },
  { icon: FaMapMarkerAlt, text: "Bhubaneswar, Odisha, India" },
];

const LinkList = ({ title, items }) => (
  <div>
    <h3 className="font-semibold text-lg mb-4">{title}</h3>
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="mb-2">
          <a href={item.href} className="text-gray-600 hover:text-[#1c7636]">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const BlogList = () => (
  <div>
    <h3 className="font-semibold text-lg mb-4">Recent Post</h3>
    {blogPosts.map((post, idx) => (
      <div key={idx} className="mb-4">
        {/* <img src={post.image} alt="Blog Post" className="w-16 h-16 object-cover mb-2" /> */}
        <a href="#" className="text-gray-600 hover:text-[#1c7636]">
          {post.title}
        </a>
        <p className="text-sm text-gray-500">{post.date}</p>
      </div>
    ))}
  </div>
);

const ContactList = () => (
  <div>
    <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
    <ul>
      {contacts.map((contact, idx) => (
        <li key={idx} className="flex items-center mb-2">
          <contact.icon className="mr-2 text-[#1c7636]" />
          <span>{contact.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#e6e6ebb1] text-gray-800 py-10 px-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between w-full">
          <div className="mb-4">
            <p className="text-[#1c7636] text-3xl font-bold">Tatvani</p>
          </div>
          <div className="flex space-x-4 h-9">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="text-[#1c7636] p-2.5 rounded-lg hover:bg-[#1c7636] hover:text-white bg-[#C9E9D2]"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-400  mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <LinkList title="Quick Links" items={quickLinks} />
          <LinkList title="Service Links" items={serviceLinks} />
          <BlogList />
          <ContactList />
        </div>

        <div className="border-t border-gray-400 flex justify-between mt-8 pt-4 text-center">
          <p className="">&copy; Mynimalistic 2024 | All Rights Reserved</p>
          <div className="flex justify-center space-x-6 ">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms & Condition
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
