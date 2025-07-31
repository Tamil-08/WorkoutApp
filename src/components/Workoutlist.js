import React, { useState } from 'react';
import './Workoutlist.css';
import { useNavigate } from 'react-router-dom';
import sung from '../assets/sung.jfif';

import pushupsImg from '../assets/pushups.png';
import situpsImg from '../assets/situps.png';
import squatsImg from '../assets/squats.png';
import crunchesImg from '../assets/crunches.png';

const workouts = [
  { name: 'Push-ups', reps: 100, completed: 30, image: pushupsImg },
  { name: 'Sit-ups', reps: 100, completed: 60, image: situpsImg },
  { name: 'Squats', reps: 100, completed: 45, image: squatsImg },
  { name: 'Crunches', reps: 100, completed: 10, image: crunchesImg },
];

const WorkoutList = () => {
  const navigate = useNavigate();
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleLevelSelect = (level) => {
    if (selectedWorkout) {
      navigate(`/workout/${selectedWorkout}/${level}`);
      setSelectedWorkout(null); // close modal
    }
  };

  return (
    <div className="workout-panel">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="image-header">
        <img src={sung} alt="Workout Header" className="hero-image" />
        <div className="overlay-blur"></div>
        <h2 className="panel-title">
          DAILY QUEST – Train To Become A <span className="highlight">Formidable Combatant</span> In 100 Days
        </h2>
      </div>

      <div className="workout-grid">
        {workouts.map((workout, index) => {
          const progressPercent = (workout.completed / workout.reps) * 1;

          return (
            <div
              className="workout-card image-card"
              key={index}
              style={{
                backgroundImage: `url(${workout.image})`,
              }}
            >
              <div className="workout-overlay">
                <h4>{workout.name}</h4>
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {workout.completed}/{workout.reps} reps
                  </span>
                </div>
                <button
                  className="start-btn"
                  onClick={() => setSelectedWorkout(workout.name)}
                >
                  START
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="quest-warning">
        ⚠️ <strong>CAUTION:</strong> If the daily quest remains incomplete, penalties will be given accordingly.
      </p>

      {/* Difficulty Modal */}
      {selectedWorkout && (
        <div className="difficulty-modal">
          <div className="modal-content">
            <h3>Select Difficulty for {selectedWorkout}</h3>
            <div className="difficulty-buttons">
              <button onClick={() => handleLevelSelect('beginner')}>Beginner (25 reps)</button>
              <button onClick={() => handleLevelSelect('intermediate')}>Intermediate (50 reps)</button>
              <button onClick={() => handleLevelSelect('expert')}>Expert (100 reps)</button>
            </div>
            <button className="close-btn" onClick={() => setSelectedWorkout(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutList;
