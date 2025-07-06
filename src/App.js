import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Tournament from './components/Tournament';
import FranchiseLeague from './components/FranchiseLeague';
import Schedule from './components/Schedule';
import Standings from './components/Standings';
import Rules from './components/Rules';
import Handbook from './components/Handbook';
import SalaryStructure from './components/SalaryStructure';
import GlobalRanking from './components/GlobalRanking';
import PlayerValueTracker from './components/PlayerValueTracker';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Tournament />} />
          <Route path="/tournaments" element={<Tournament />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/global-ranking" element={<GlobalRanking />} />
          <Route path="/handbook" element={<Handbook />} />
          
          {/* The Association Section */}
          <Route path="/franchise-league" element={<FranchiseLeague />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/player-tracker" element={<PlayerValueTracker />} />
          <Route path="/salary-structure" element={<SalaryStructure />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
