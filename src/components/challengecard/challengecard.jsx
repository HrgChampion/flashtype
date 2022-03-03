import React from "react";
import "./challengecard.css";

const ChallengeCard = ({ cardname, cardvalue }) => {
  return (
    <div className="challenge-card-container">
      <div className="card-name">{cardname}</div>
      <div className="card-value">{cardvalue}</div>
    </div>
  );
};
export default ChallengeCard;
