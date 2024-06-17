import React, { useState, useEffect } from 'react';
import "../css/technology.css"
import 'react-multi-carousel/lib/styles.css';


export const Game2 = () => {
    
    const [molePositions, setMolePositions] = useState(Array(9).fill(false));
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isGameActive, setIsGameActive] = useState(false);
  
    useEffect(() => {
      if (isGameActive && timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0) {
        setIsGameActive(false);
      }
    }, [timeLeft, isGameActive]);
  
    useEffect(() => {
      let moleTimer;
      if (isGameActive) {
        moleTimer = setInterval(() => {
          const newMolePositions = Array(9).fill(false);
          const randomIndex = Math.floor(Math.random() * 9);
          newMolePositions[randomIndex] = true;
          setMolePositions(newMolePositions);
        }, 800);
      } else {
        setMolePositions(Array(9).fill(false));
      }
      return () => clearInterval(moleTimer);
    }, [isGameActive]);
  
    const startGame = () => {
      setScore(0);
      setTimeLeft(30);
      setIsGameActive(true);
    };
  
    const whackMole = (index) => {
      if (molePositions[index]) {
        setScore(score + 1);
        setMolePositions(molePositions.map((pos, i) => (i === index ? false : pos)));
      }
    };

    return(
        <div>
        <section className="technology" id="technology">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        

                    <div className="whack-a-mole">
                    <h1>Whack-a-Mole</h1>
                    <p>Score: {score}</p>
                    <p>Time Left: {timeLeft}</p>
                    {!isGameActive && <button onClick={startGame}>Start Game</button>}
                    <div className="grid">
                        {molePositions.map((isMoleVisible, index) => (
                        <div key={index} className="hole" onClick={() => whackMole(index)}>
                            {isMoleVisible && <div className="mole"></div>}
                        </div>
                        ))}
                    </div>
    </div>


                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
        
    )

}