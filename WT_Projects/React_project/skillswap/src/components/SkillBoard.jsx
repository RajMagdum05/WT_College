function SkillBoard({ skills, deleteSkill }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>🌐 Exchange Board</h2>
      <div className="grid">
        {skills.length === 0 ? (
          <div className="card empty">
            <p>The board is quiet. Be the first to post a skill!</p>
          </div>
        ) : (
          skills.map((item, index) => (
            <div key={index} className="skill-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="user-name">{item.name}</div>
                <button 
                  onClick={() => deleteSkill(index)}
                  style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '4px 8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Remove
                </button>
              </div>
              <div className="tag">
                <span className="tag-label">Offers</span>
                <span className="tag-value">{item.teach}</span>
              </div>
              <div className="tag">
                <span className="tag-label">Wants</span>
                <span className="tag-value" style={{ color: 'var(--primary)' }}>{item.learn}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SkillBoard;
