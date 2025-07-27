
//import './App.css';




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LandingPage from './components/Landingpage';
import WorkoutList from './components/Workoutlist';

import Nav from './components/Navbar';
import Footer from './components/Footer';
import WorkoutDetail from './components/WorkoutDetail';





function App() {
  return (
    <>
      <Router>
      <Nav /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/workouts" element={<WorkoutList />} />
           <Route path="/workout/:name" element={<WorkoutDetail />} />
      </Routes>
       <Footer/>
    </Router>





  
 </>
  );

}


export default App;
