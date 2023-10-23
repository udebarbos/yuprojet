import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Projects from './components/pages/Projects'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ProjectEdit from './components/pages/ProjectEdit'
function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/projects'  element={<Projects />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projectedit/:id' element={<ProjectEdit/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
