import Sidebar from '../../components/Essentials/Sidebar';
import Header from '../../components/Essentials/Header';
import AddAdvertise from '../../components/AdminPage/addAdvertise';

const AddAdvertisePage = () => {
  return (
    <div className="admin-dashboard flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-800 pt-16  pl-64">
        <Header />
        <AddAdvertise />
      </div>
    </div>
  );
};

export default AddAdvertisePage;
