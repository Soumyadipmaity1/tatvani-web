

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Stories from "./pages/stories"
import Contact from './pages/contact';
import Poetry from './pages/poetry';
import Navbar from './components/Essentials/Navbar';
import Footer from './components/Essentials/Footer';
import Submission from './pages/submission';
import Article from "./pages/article"

function App() {
  return (
    <Router>

<Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/poetry" element={<Poetry />} />
<Route path="/article" element={<Article/>} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stories" element={<Stories/>} />
        {/* <Route path="/careers" element={<Careers />} /> */}
      </Routes>
<Footer/>
    </Router>
  );
}

export default App;
