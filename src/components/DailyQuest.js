import React from 'react';
import './DailyQuest.css';

const DailyQuest = () => {
  return (
    <div className="quest-panel">
      <h2 className="quest-title">DAILY QUEST – TRAIN TO BECOME A FORMIDABLE COMBATANT</h2>

      <div className="quest-goals">
        <h3 className="goals-label">GOALS</h3>
        <ul>
          <li>– PUSH-UPS <span>[0/100]</span></li>
          <li>– SIT-UPS <span>[0/100]</span></li>
          <li>– SQUATS <span>[0/100]</span></li>
          <li>– RUN <span>[0/10KM]</span></li>
        </ul>
      </div>

      <p className="quest-warning">
        <strong>CAUTION!</strong> – IF THE DAILY QUEST REMAINS INCOMPLETE, PENALTIES WILL BE GIVEN ACCORDINGLY.
      </p>
    </div>
  );
};

export default DailyQuest;
