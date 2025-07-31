import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/Landingpage';
import WorkoutList from './components/Workoutlist';
import WorkoutDetail from './components/WorkoutDetail';


const AppLayout = () => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname.startsWith('/workout');

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workouts" element={<WorkoutList />} />
        <Route path="/workout/:name" element={<WorkoutDetail />} />
           <Route path="/workout/:name/:level" element={<WorkoutDetail />} /> {/* ✅ Fixed here */}
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
