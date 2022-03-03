import React from "react";
import TestLetter from "../testLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange
}) => {
  return (
    <div className="Typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:
          {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {!timerStarted && "Start Typing to Start the Test! "}
        </p>
      </div>
      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {/* {selectedParagraph} */}
            {testInfo.map((individualLetterInfo, index) => (
              <TestLetter
                key={index}
                individualLetterInfo={individualLetterInfo}
              />
            ))}
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="Start Typing here...."
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default TypingChallenge;
