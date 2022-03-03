import React from "react";
import TestContainer from "../TestContainer/testcontainer";

import "./challenge.css";

const ChallengeSection = ({
  selectedParagraph,
  timerStarted,
  timeRemaining,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange,
  startAgain
}) => {
  return (
    <div className="ChallengeSection-container">
      <h1 data-aos="fade-down" className="challenge-header">
        Take a speed test now!
      </h1>
      <TestContainer
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        selectedParagraph={selectedParagraph}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};
export default ChallengeSection;
