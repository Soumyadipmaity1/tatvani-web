import Sidebar from '../../components/Essentials/Sidebar';
import Header from '../../components/Essentials/Header';



const AdminDashboard = () => {
  return (
    <div className="admin-dashboard flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col pt-16 pl-64"> {/* Add margin-left to account for the sidebar */}
        <Header />

        <div className="flex-1 overflow-y-auto text-white p-8 bg-gray-800">
          <h1 className="text-4xl font-bold">Welcome to the Admin Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;