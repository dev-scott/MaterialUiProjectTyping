import React from 'react'
import "./Jouer.scss"

const Jouer = () => {

    const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    const timestamps = [];

    timestamps.unshift(getTimestamp());

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // function getRandomKey() {
    //   return keys[getRandomNumber(0, keys.length-1)]
    // }

    // function targetRandomKey() {
    //     const key = document.getElementById(getRandomKey());
    //     key.classList.add("selected");
    //     let start = Date.now()
    // }

    function getTimestamp() {
        return Math.floor(Date.now() / 1000)
    }

    document.addEventListener("keyup", event => {
        const keyPressed = String.fromCharCode(event.keyCode);
        const keyElement = document.getElementById(keyPressed);
        const highlightedKey = document.querySelector(".selected");

        keyElement.classList.add("hit")
        keyElement.addEventListener('animationend', () => {
            keyElement.classList.remove("hit")
        })

        if (keyPressed === highlightedKey.innerHTML) {
            timestamps.unshift(getTimestamp());
            const elapsedTime = timestamps[0] - timestamps[1];
            console.log(`Character per minute ${60 / elapsedTime}`)
            highlightedKey.classList.remove("selected");
            // targetRandomKey();
        }
    })

    // targetRandomKey();







    return (


        <div className='Jouer'>

            <div className="boule1"></div>
            <div className="boule2"></div>


            <div className="partie1_jouer">
                <div className="container">

                    <div className="contain_left">
                        <div class="content">
                            <ul class="result">
                                <li class="time">
                                    <p>Time</p>
                                    <span>60s</span>
                                </li>
                                <li class="errors">
                                    <p>Errors</p>
                                    <span>0</span>
                                </li>
                                <li class="wpm">
                                    <p>WPM</p>
                                    <span>0</span>
                                </li>
                                <li class="cpm">
                                    <p>CPM</p>
                                    <span>0</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="contain_center">

                    </div>
                    <div className="contain_right">



                        <div class="content">
                            <ul class="result">
                                <li class="time">
                                    <p>Time</p>
                                    <span>60s</span>
                                </li>
                                <li class="errors">
                                    <p>Errors</p>
                                    <span>0</span>
                                </li>
                                <li class="wpm">
                                    <p>WPM</p>
                                    <span>0</span>
                                </li>
                                <li class="cpm">
                                    <p>CPM</p>
                                    <span>0</span>
                                </li>
                            </ul>
                        </div>


                    </div>


                </div>
                <div className="button_contain">  <button> Lancer le jeu </button>  </div>




            </div>

            <div className="partie2_jouer">


                <div class="keyboard">
                    <ul class="row row-0">
                        <li class="pinky" id="esc">ESC</li>
                        <li class="pinky" id="1">1</li>
                        <li class="ring" id="2">2</li>
                        <li class="middle" id="3">3</li>
                        <li class="pointer1st" id="4">4</li>
                        <li class="pointer2nd" id="5">5</li>
                        <li class="pointer2nd" id="6">6</li>
                        <li class="pointer1st" id="7">7</li>
                        <li class="middle" id="8">8</li>
                        <li class="ring" id="9">9</li>
                        <li class="pinky" id="10">0</li>
                        <li class="pinky" >-</li>
                        <li class="pinky" >+</li>
                        <li class="pinky" id="back">BACK</li>
                    </ul>
                    <ul class="row row-1">
                        <li class="pinky" id="tab">TAB</li>
                        <li class="pinky" id="Q">Q</li>
                        <li class="ring" id="W">W</li>
                        <li class="middle" id="E">E</li>
                        <li class="pointer1st" id="R">R</li>
                        <li class="pointer2nd" id="T">T</li>
                        <li class="pointer2nd" id="Y">Y</li>
                        <li class="pointer1st" id="U">U</li>
                        <li class="middle" id="I">I</li>
                        <li class="ring" id="O">O</li>
                        <li class="pinky" id="P">P</li>
                        <li class="pinky" >[</li>
                        <li class="pinky" >]</li>
                        <li class="pinky" >\</li>
                    </ul>
                    <ul class="row row-2">
                        <li class="pinky" id="caps">CAPS</li>
                        <li class="pinky" id="A">A</li>
                        <li class="ring" id="S">S</li>
                        <li class="middle" id="D">D</li>
                        <li class="pointer1st" id="F">F</li>
                        <li class="pointer2nd" id="G">G</li>
                        <li class="pointer2nd" id="H">H</li>
                        <li class="pointer1st" id="J">J</li>
                        <li class="middle" id="K">K</li>
                        <li class="ring" id="L">L</li>
                        <li class="pinky" >:</li>
                        <li class="pinky" >''</li>
                        <li class="pinky" id="enter">ENTER</li>
                    </ul>
                    <ul class="row row-3">
                        <li class="pinky" id="left-shift">SHIFT</li>
                        <li class="pinky" id="Z">Z</li>
                        <li class="ring" id="X">X</li>
                        <li class="middle" id="C">C</li>
                        <li class="pointer1st" id="V">V</li>
                        <li class="pointer2nd" id="B">B</li>
                        <li class="pointer2nd" id="N">N</li>
                        <li class="pointer1st" id="M">M</li>
                        <li class="middle" >,</li>
                        <li class="ring" >.</li>
                        <li class="pinky" >;</li>
                        <li class="pinky" id="right-shift">SHIFT</li>
                    </ul>
                </div>



            </div>

        </div>






    )
}

export default Jouer