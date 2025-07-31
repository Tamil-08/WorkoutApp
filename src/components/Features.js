import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';
import {
  FaFistRaised, FaDragon, FaMask, FaFireAlt,
  FaUsers, FaMountain, FaHeartbeat, FaBolt,
  FaDumbbell, FaRunning, FaSkull, FaFire
} from 'react-icons/fa';

const workouts = [
  { id: 'demon-slayer', icon: <FaFire />, title: 'Demon Slayer Workout', desc: 'Train with breathing focus and sword-style intensity.' },
  { id: 'dragon-slayer', icon: <FaDragon />, title: 'Dragon Slayer Workout', desc: 'Heavy lifting and fire-driven cardio – Inspired by Natsu.' },
  { id: 'enforcer', icon: <FaSkull />, title: 'Enforcer Workout', desc: 'Brutal, tactical drills built for mental and physical endurance.' },
  { id: 'fullmetal', icon: <FaDumbbell />, title: 'Fullmetal Workout', desc: 'Alchemy-style circuits mixing strength and mobility.' },
  { id: 'goku-hiit', icon: <FaBolt />, title: 'Goku HIIT Workout', desc: 'High-intensity Saiyan-style training to push your limits.' },
  { id: 'guts', icon: <FaFistRaised />, title: 'Guts Workout', desc: 'Dark, relentless full-body power training inspired by Berserk.' },
  { id: 'korra', icon: <FaRunning />, title: 'Korra Workout', desc: 'Elemental strength + agility mix with fluid movement drills.' },
  { id: 'monkey-d', icon: <FaUsers />, title: 'Monkey D. Workout', desc: 'Stretch, sprint, strike – Flexible training like Luffy.' },
  { id: 'sao-survivor', icon: <FaMask />, title: 'SAO Survivor Workout', desc: 'Speed, agility and precision drills to survive the game.' },
  { id: 'super-saiyan', icon: <FaFireAlt />, title: 'Super Saiyan Workout', desc: 'Power up and explode with energy-packed compound sets.' },
  { id: 'survey-corps', icon: <FaMountain />, title: 'Survey Corps Workout', desc: 'Mobility, 3D gear simulation drills, and vertical cardio.' },
  { id: 'titania', icon: <FaHeartbeat />, title: 'Titania Workout', desc: 'Warrior queen endurance lifts inspired by Erza Scarlet.' }
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleWorkout = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleViewPlan = (id) => {
    navigate(`/workout/${id}`);
  };

  return (
    <section className="features-section" id="features">
      <h2>ANIME WORKOUT FEATURES</h2>
      <div className="features-grid">
        {workouts.map((item, i) => (
          <div
            key={i}
            className={`feature-card ${activeIndex === i ? 'active' : ''}`}
            onClick={() => toggleWorkout(i)}
          >
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>

            {activeIndex === i && (
              <div className="workout-reveal">
                <strong>Workout Plan:</strong>
                <p>{item.desc}</p>
                <button
                  className="view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewPlan(item.id);
                  }}
                >
                  View Plan
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
