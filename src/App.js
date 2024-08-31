// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Map from './map';
import ChangeLanguage from './pages/ChangeLanguage';
import TrackMyTrain from './pages/TrackMyTrain';
import AccessibleMode from './pages/AccessibleMode';
import NearbyTransport from './pages/NearbyTransport';
import ReportIssue from './pages/ReportIssue';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/change-language" element={<ChangeLanguage />} />
            <Route path="/track-my-train" element={<TrackMyTrain />} />
            <Route path="/accessible-mode" element={<AccessibleMode />} />
            <Route path="/nearby-transport" element={<NearbyTransport />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
