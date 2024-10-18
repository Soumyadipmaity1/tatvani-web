import ReviewPost from '../../components/AdminPage/reviewPost';
import Sidebar from '../../components/Essentials/Sidebar';
import Header from '../../components/Essentials/Header';

const ReviewPostPage = () => {
  return (
    <div className="admin-dashboard flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-800 pt-16  pl-64">
        <Header />
        <ReviewPost/>
      </div>
    </div>
  );
};

export default ReviewPostPage;
