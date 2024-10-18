import Sidebar from '../../components/Essentials/Sidebar';
import Header from '../../components/Essentials/Header';
import AddPost from '../../components/AdminPage/addPost';

const AddPostPage = () => {
  return (
    <div className="admin-dashboard flex ">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-800 pt-16  pl-64">
        <Header />
        <AddPost />
      </div>
    </div>
  );
};

export default AddPostPage;
