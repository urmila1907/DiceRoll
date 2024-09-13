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
    const [class3,setClass3] = useState("fa-duotone fa-solid fa-dice-one");
    const [class4,setClass4] = useState("fa-duotone fa-solid fa-dice-one");
    const [clicked, isClicked] = useState(false);
    const [winning, setWinning] = useState(0);
   
    var rm1 = Math.floor(Math.random()*6);
    var rm2 = Math.floor(Math.random()*6);
    var rm3 = Math.floor(Math.random()*6);
    var rm4 = Math.floor(Math.random()*6);
    var score1 = rm1+rm2;
    var score2 = rm3+rm4;

    function roll(){
        isClicked(true);
        const btns = document.getElementsByClassName('dice-btn');
        const msg = document.getElementById('msg');
        const die1 = document.getElementById('die1');
        const die2 = document.getElementById('die2');
        const die3 = document.getElementById('die3');
        const die4 = document.getElementById('die4');
        const btn = btns[0];

        die1.style.animation = 'tilt-horizontal-shaking 1s';
        die2.style.animation = 'tilt-horizontal-shaking 1s';
        die3.style.animation = 'tilt-horizontal-shaking 1s';
        die4.style.animation = 'tilt-horizontal-shaking 1s';
        btn.disabled = true;
        msg.style.visibility = 'hidden';

        setTimeout(()=>{
            isClicked(false);
            setClass1(arr[rm1]);
            setClass2(arr[rm2]);
            setClass3(arr[rm3]);
            setClass4(arr[rm4]);
            btn.disabled = false;
            die1.style.animation = '';
            die2.style.animation = '';
            die3.style.animation = '';
            die4.style.animation = '';
        },1000);
        setTimeout(()=>{
            if(score1 === score2){
                setWinning(0);
            }
            else if(score1>score2){
                setWinning(2);
            }
            else{
                setWinning(1);
            }
            msg.style.visibility = 'visible';
        },1200);
    }

    return (
        <>
        <div id="msg">{winning===1? (<p>Yay, You Win!</p>) : winning===0 ? (<p>That was a tie. Go Again!</p>) : (<p>Oops, You Lost! Try Again!</p>)}</div>
        <div className="big-box">
            <div className="die-box">
                    <div className="dice-box-main">
                        <div className="dice-box">
                            <i class={class1} id="die1"></i>
                            <i class={class2} id="die2"></i>
                        </div>
                        <div className="comp-text">Computer</div>
                    </div>
                    <div className="dice-box-main">
                        <div className="dice-box">
                            <i class={class3} id="die3"></i>
                            <i class={class4} id="die4"></i>
                        </div>
                        <div className="you-text">You</div>
                    </div>
            </div>
            <div className="btn-box">
                    <button className="dice-btn" onClick={roll}>{clicked===false? <p>Roll the dice!</p> : <p>Rolling!</p>}</button>
                </div>
        </div>
        
        </>
    )
}

export default RollDice;