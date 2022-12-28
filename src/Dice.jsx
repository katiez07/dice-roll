import React, { useEffect, useState } from 'react';
import Die from './Die.jsx';

/*
*   
*   The Dice component takes in 2 parameters:
*       - (required) Array of 6 numbers called "numbers"
*       - (optional) Array of 6 colors called "colors"
*/
function Dice(props){
    let numberArray = props.numbers
    // let colorArray = props.colors; 
    const [colorArray, setColorArray] = useState(props.colors ?? []);

    console.log(colorArray)

    useEffect (() => {
        if (!props.colors){
            setColorArray ([
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor()
            ]);
        }
    }, []);

    function getRandomDieNumber() {
        const min = 1;
        const max = 6;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomDieAnimation() {
        const number = getRandomDieNumber()
        if (number === 1) {
            return "roll-animation-1"
        }
        else if (number === 2) {
            return "roll-animation-2"
        }
        else if (number === 3) {
            return "roll-animation-3"
        }
        else if (number === 4) {
            return "roll-animation-4"
        }
        else if (number === 5) {
            return "roll-animation-5"
        }
        else {
            return "roll-animation-6"
        }
    }

    function getRandomColor() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
    }

    return (
        <div className="dice">
            <Die animationType={getRandomDieAnimation()} color={colorArray[0]} number={numberArray[0]} />
            <Die animationType={getRandomDieAnimation()} color={colorArray[1]} number={numberArray[1]} />
            <Die animationType={getRandomDieAnimation()} color={colorArray[2]} number={numberArray[2]} />
            <Die animationType={getRandomDieAnimation()} color={colorArray[3]} number={numberArray[3]} />
            <Die animationType={getRandomDieAnimation()} color={colorArray[4]} number={numberArray[4]} />
            <Die animationType={getRandomDieAnimation()} color={colorArray[5]} number={numberArray[5]} />
        </div>
    );
}

export default Dice;