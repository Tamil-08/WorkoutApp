import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const Dashboard = () => {
  const xp = 60;

  return (
    <Container className="text-white my-5">
      <h2 className="glow-text">Hunter Dashboard</h2>
      <p>Level: 5 | Rank: C-Class</p>
      <ProgressBar striped now={xp} label={`${xp}% XP`} variant="info" className="mb-4" />

     
    </Container>
  );
};

export default Dashboard;
