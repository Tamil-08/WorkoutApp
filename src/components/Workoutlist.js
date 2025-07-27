import React from 'react';
import './Workoutlist.css';
import { useNavigate } from 'react-router-dom';
import video1 from '../assets/solo2.mp4';

const workouts = [
  { name: 'Push-ups', reps: 100, completed: 30 },
  { name: 'Sit-ups', reps: 100, completed: 60 },
  { name: 'Squats', reps: 100,  completed: 45 },
  { name: 'Crunches', reps: 100, completed: 10 },
];

const WorkoutList = () => {
  const navigate = useNavigate();

  return (
    <div className="workout-panel" id="workout-panel">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="video-wrapper">
        <video autoPlay muted loop playsInline className="hero-video1">
          <source src={video1} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <h2 className="challenge-title">
        DAILY QUEST – Train To Become A <span className="highlight">Formidable Combatant</span> In 100 Days
      </h2>

      <div className="workout-grid">
        {workouts.map((workout, index) => {
          const progressPercent = (workout.completed / workout.reps) * 100;
          return (
            <div className="workout-card" key={index}>
              <div className="workout-icon bounce">{workout.icon}</div>
              <div className="workout-details">
                <h4>{workout.name}</h4>
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{workout.completed}/{workout.reps} reps</span>
                </div>
                <button className="start-btn" onClick={() => navigate(`/workout/${workout.name}`)}>
                  START
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="quest-warning">
        <strong>⚠️ CAUTION:</strong> If the daily quest remains incomplete, penalties will be given accordingly.
      </p>
    </div>
  );
};

export default WorkoutList;
