import { useState } from "react";
import "./RollDice.css"

function RollDice(){
    const arr = [
        "fa-duotone fa-solid fa-dice-one",
        "fa-duotone fa-solid fa-dice-two",
        "fa-duotone fa-solid fa-dice-three",
        "fa-duotone fa-solid fa-dice-four",
        "fa-duotone fa-solid fa-dice-five",
        "fa-duotone fa-solid fa-dice-six"
    ]
    const [class1,setClass1] = useState("fa-duotone fa-solid fa-dice-one");
    const [class2,setClass2] = useState("fa-duotone fa-solid fa-dice-one");
    const [clicked, isClicked] = useState(false);
   
    var rm1 = Math.floor(Math.random()*6);
    var rm2 = Math.floor(Math.random()*6);

    function roll(){
        isClicked(true);
        const btns = document.getElementsByClassName('dice-btn');
        const die1 = document.getElementById('die1');
        const die2 = document.getElementById('die2');
        const btn = btns[0];
        die1.style.animation = 'tilt-horizontal-shaking 1s';
        die2.style.animation = 'tilt-horizontal-shaking 1s';
        btn.disabled = true;
        setTimeout(()=>{
            isClicked(false);
            setClass1(arr[rm1]);
            setClass2(arr[rm2]);
            btn.disabled = false;
            die1.style.animation = '';
            die2.style.animation = '';
        },1000);
    }

    return (
        <>
        <div className="main-box">
            <div className="dice-box">
                <i class={class1} id="die1"></i>
                <i class={class2} id="die2"></i>
            </div>
            <div className="btn-box">
                <button className="dice-btn" onClick={roll}>{clicked===false? <p>Roll the dice!</p> : <p>Rolling!</p>}</button>
            </div>
        </div>
        </>
    )
}

export default RollDice;