/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Stories from './pages/stories';
import Contact from './pages/contact';
import Poetry from './pages/poetry';
import Navbar from './components/Essentials/Navbar';
import Footer from './components/Essentials/Footer';
import Submission from './pages/submission';
import Article from './pages/article';
import AdminDashboard from './pages/admin/Dashboard';
import AddPostPage from './pages/admin/addPost';
import AddAdvertisePage from './pages/admin/addAdvertise';
import ReviewPostPage from './pages/admin/reviewPost';
import Login from './pages/admin/loginPage';
import { AuthProvider, useAuth } from "./auth/loginAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router basename="/">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} exact />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} exact />
          <Route path="/poetry" element={<><Navbar /><Poetry /><Footer /></>} exact />
          <Route path="/article" element={<><Navbar /><Article /><Footer /></>} exact />
          <Route path="/submission" element={<><Navbar /><Submission /><Footer /></>} exact />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} exact />
          <Route path="/stories" element={<><Navbar /><Stories /><Footer /></>} exact />

          {/* Admin Pages */}
          <Route path="/login" element={<Login />} exact />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} exact />
          <Route path="/admin/add-post" element={<ProtectedRoute><AddPostPage /></ProtectedRoute>} exact />
          <Route path="/admin/add-advertise" element={<ProtectedRoute><AddAdvertisePage /></ProtectedRoute>} exact />
          <Route path="/admin/review-posts" element={<ProtectedRoute><ReviewPostPage /></ProtectedRoute>} exact />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
