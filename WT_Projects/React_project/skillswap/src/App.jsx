import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SkillBoard from './components/SkillBoard';
import PostSkill from './components/PostSkill';

function App() {
  // Initialize state from LocalStorage if it exists
  const [skills, setSkills] = useState(() => {
    const savedSkills = localStorage.getItem('skills');
    return savedSkills ? JSON.parse(savedSkills) : [];
  });

  // Save to LocalStorage whenever 'skills' changes
  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  const deleteSkill = (index) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
    alert("Skill removed from board! 🗑️");
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<SkillBoard skills={skills} deleteSkill={deleteSkill} />} />
          <Route path="/post" element={<PostSkill setSkills={setSkills} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
