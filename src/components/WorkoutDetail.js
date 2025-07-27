import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './WorkoutDetail.css';

import pushups from '../assets/pushups.png';
import situps from '../assets/sit ups.png';
import squats from '../assets/squats.png';
import crunches from '../assets/crunches.png';

const workoutImages = {
  'Push-ups': pushups,
  'Sit-ups': situps,
  'Squats': squats,
  'Crunches': crunches,
};

const workoutOrder = ['Push-ups', 'Sit-ups', 'Squats', 'Crunches'];

const WorkoutDetail = () => {
  const { name } = useParams();
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  // Save progress
  const updateProgress = (completedReps) => {
    const saved = JSON.parse(localStorage.getItem('fitProgress')) || workoutOrder.map(w => ({
      name: w,
      completed: 0,
    }));
    const updated = saved.map(w =>
      w.name === name ? { ...w, completed: completedReps } : w
    );
    localStorage.setItem('fitProgress', JSON.stringify(updated));
  };

  const startWorkout = () => {
    setStarted(true);
    intervalRef.current = setInterval(() => {
      setCount(prev => {
        const next = prev + 1;
        updateProgress(next);
        if (next >= 100) {
          clearInterval(intervalRef.current);
          setCompleted(true);

          // Go to next workout
          setTimeout(() => {
            const currentIndex = workoutOrder.indexOf(name);
            const nextWorkout = workoutOrder[currentIndex + 1];
            if (nextWorkout) {
              navigate(`/workout/${nextWorkout}`);
            } else {
              alert("🎉 All workouts completed!");
              navigate('/');
            }
          }, 1500);
        }
        return next;
      });
    }, 5000); // 5s per rep
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="detail-container">
      <h2>{name}</h2>

      <img
        src={workoutImages[name]}
        alt={name}
        className="workout-image"
      />

      <div className="counter-display">
        <h1 className="rep-count">{count}/100 Reps</h1>

        {!started && !completed && (
          <button className="rep-btn" onClick={startWorkout}>
            ▶️ Start Workout
          </button>
        )}

        {completed && <p className="done-text">✅ Completed! Moving to next...</p>}
      </div>
    </div>
  );
};

export default WorkoutDetail;
