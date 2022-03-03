import React from "react";
import TryAgain from "../TryAgain/tryagain";
import Typing from "../Typing/typing";
import "./test-container.css";

const TestContainer = ({
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
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <Typing
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            selectedParagraph={selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain
            startAgain={startAgain}
            words={words}
            characters={characters}
            wpm={wpm}
          />
        </div>
      )}
    </div>
  );
};
export default TestContainer;
