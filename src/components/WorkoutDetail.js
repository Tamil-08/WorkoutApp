import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './WorkoutDetail.css';

import pushupsImg from '../assets/pushups.png';
import situpsImg from '../assets/situps.png';
import squatsImg from '../assets/squats.png';
import crunchesImg from '../assets/crunches.png';

const levelReps = {
  beginner: 25,
  intermediate: 50,
  expert: 100
};

const imageMap = {
  'Push-ups': pushupsImg,
  'Sit-ups': situpsImg,
  'Squats': squatsImg,
  'Crunches': crunchesImg
};

const WorkoutDetail = () => {
  const { name, level } = useParams();
  const [count, setCount] = useState(0);

  const totalReps = levelReps[level] || 25;
  const image = imageMap[name] || pushupsImg;

  const handleRep = () => {
    if (count < totalReps) setCount(prev => prev + 1);
  };

  return (
    <div className="workout-detail">
      <div className="center-container">
        <div className="workout-card">
          <img src={image} alt={name} className="workout-image" />
        </div>
        <h2 className="rep-counter">{count}/{totalReps} Reps</h2>
        <button className="rep-btn" onClick={handleRep}>+1 Rep</button>
      </div>
    </div>
  );
};

export default WorkoutDetail;
