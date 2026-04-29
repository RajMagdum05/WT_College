import { useState } from 'react';

function PostSkill({ setSkills }) {
  const [name, setName] = useState('');
  const [teach, setTeach] = useState('');
  const [learn, setLearn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !teach || !learn) return alert("Please fill in all fields!");

    setSkills(prev => [...prev, { name, teach, learn }]);
    alert("Skill posted to the board! 🚀");
    setName(''); setTeach(''); setLearn('');
  };

  return (
    <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>📝 Post a Skill</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label>I can Teach</label>
          <input value={teach} onChange={e => setTeach(e.target.value)} placeholder="Enter Skill" />
        </div>
        <div className="form-group">
          <label>I want to Learn</label>
          <input value={learn} onChange={e => setLearn(e.target.value)} placeholder="Enter Skill" />
        </div>
        <button type="submit">Add to Board</button>
      </form>
    </div>
  );
}

export default PostSkill;
