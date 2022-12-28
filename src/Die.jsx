import React from 'react';
import './Die.css';

function Die(props) {
    const dieStyle = "die-list " + props.animationType;
    const dieColor = props.color;

    return (
        <div>
              <ol className={dieStyle} data-roll={props.number} id="die">
                <li className="die-item" data-side="1" style={{backgroundColor: dieColor}}>
                  <span className="dot"></span>
                </li>
                <li className="die-item" data-side="2" style={{backgroundColor: dieColor}}>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </li>
                <li className="die-item" data-side="3" style={{backgroundColor: dieColor}}>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </li>
                <li className="die-item" data-side="4" style={{backgroundColor: dieColor}}>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </li>
                <li className="die-item" data-side="5" style={{backgroundColor: dieColor}}>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </li>
                <li className="die-item" data-side="6" style={{backgroundColor: dieColor}}>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </li>
              </ol>
        </div>
    );
  }
  
  export default Die;

