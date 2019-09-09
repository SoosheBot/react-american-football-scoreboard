//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home_score, sethomeScore] = useState(0);
  const [away_score, setawayScore] = useState(0);

  const [homeName, sethomeTeam] = useState();
  const [awayName, setawayTeam] = useState();
  const [timer, setTimer] = useState(0);
  const [start_timer, setstartTime] = useState(0);
  const [stop_timer, setstopTime] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home_score}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{away_score}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => sethomeScore(home_score + 6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => sethomeScore(home_score + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setawayScore(away_score + 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setawayScore(away_score + 3)}>Away Field Goal</button>
          <button className="start__timer" onClick={() => setstartTime(start_timer)}>Start Timer</button>
          <button className="stop__timer" onClick={() => setstopTime(stop_timer)}>Stop Timer</button>
        </div>
      </section>
    </div>
  );
}

export default App;
