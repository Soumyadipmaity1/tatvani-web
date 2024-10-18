import { useState } from "react";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    category: "", 
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageUpload = (e) => {
    setPost({ ...post, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    // submission logic 
  };

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl mb-5">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={post.author}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Content</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded h-32"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={post.category}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="Article">Article</option>
            <option value="Poetry">Poetry</option>
            <option value="Stories">Stories</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Related Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 px-4 py-2 mt-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
