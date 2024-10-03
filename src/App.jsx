import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hello from './pages/Hello';
import About from './pages/About';
import Project from './pages/Project';
import Home from './pages/Home';
import Contact from './components/ui/Contact';
import Bio from './components/ui/Bio';
import School from './components/ui/School';
import University from './components/ui/University';
import Cricket from './components/ui/Cricket';
import Photography from './components/ui/Photography';
import ContactInfo from './ContactInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Hello />} />
          <Route path="about" element={<About />} >
            <Route path='' element={<Bio />} />
            <Route path='school' element={<School />} />
            <Route path='university' element={<University />} />
            <Route path='cricket' element={<Cricket />} />
            <Route path='photography' element={<Photography />} />
          </Route>
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} >
            <Route path='' element={<ContactInfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
