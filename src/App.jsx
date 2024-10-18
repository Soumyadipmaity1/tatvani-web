import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/poetry" element={<><Navbar /><Poetry /><Footer /></>} />
          <Route path="/article" element={<><Navbar /><Article /><Footer /></>} />
          <Route path="/submission" element={<><Navbar /><Submission /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/stories" element={<><Navbar /><Stories /><Footer /></>} />

          {/* Admin Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/add-post" element={<ProtectedRoute><AddPostPage /></ProtectedRoute>} />
          <Route path="/admin/add-advertise" element={<ProtectedRoute><AddAdvertisePage /></ProtectedRoute>} />
          <Route path="/admin/review-posts" element={<ProtectedRoute><ReviewPostPage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
