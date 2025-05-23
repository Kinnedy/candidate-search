import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/">Candidate Search</Link></li>
          <li><Link to="/SavedCandidates">Saved Candidates</Link></li>
        </ul>
      </nav>
    </div> 
  );
};

export default Nav;
