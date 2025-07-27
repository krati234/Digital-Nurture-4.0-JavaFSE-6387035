import React from 'react';
import '../Stylesheets/mystyle.css';
function CalculateScore(props) {
  return (
    <div className="scorecard">
      <h1>
        Student Score Card
      </h1>
      <hr />
      <div className="score-details">
        <h3 className="score-heading">
          Name: {props.name}
        </h3>
        <h3 className="score-heading">
          School: {props.school}
        </h3>
        <h3 className="score-heading">
          Total: {props.total}
        </h3>
        <h3 className="score-heading">
          Average: {props.total / props.goal * 100}
        </h3>
      </div>
    </div>
  );
}
export default CalculateScore;