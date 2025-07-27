import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Landingpage.css';
import video from '../assets/solo.mp4';
import DailyQuest from './DailyQuest';
import WorkoutList from './Workoutlist';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleArise = () => {
    navigate('/workouts'); // navigate to new route
  };

  return (
    <>
      <div className="hero-container">
        <video autoPlay muted loop className="hero-video">
          <source src={video} type="video/mp4" />
        </video>
        <Container className="text-center text-white hero-content custom">
          <h1 className="display-1 hero-title">FitHub</h1>
          <h4 className="hero-subtitle">No trainer. No experience. Just results.</h4>
          <p className="hero-tagline">Train like a hunter. Arise and conquer.</p>
          <Button size="lg" className="mt-3" onClick={handleArise}>Arise</Button>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
