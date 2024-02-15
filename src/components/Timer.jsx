import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(600);
    const [isRunning, setIsRunning] = useState(false);
    const [countdown, setCountdown] = useState(10);
    

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
                timer = setInterval(() => {
                    setTime((prevTime) => prevTime - 1);
            }, 1000);
        };

        return () => {
            clearInterval(timer);
        };
    }, [isRunning, time]);


    const handleCountdown = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0
        }

        setCountdown(e.target.value);
        setIsRunning(false);
        setTime(e.target.value * 60);
        console.log(countdown, time)
    }

    const handleStartButton = () => {
        console.log("Start button pressed");
        setIsRunning(true);
    }

    const handleStopButton = () => {
        console.log("Stop button pressed");
        setIsRunning(false);
    }

    const handleResetButton = () => {
        console.log("Reset button pressed");
        setIsRunning(false);
        setTime(countdown * 60);
        setCountdown()
    }

    return (
        <div className="inputField__around">
            <div className="inputField__label">
                <label htmlFor="field">Timer</label>
            </div>
            <div className="inputField__field">
                <input
                    type="number"
                    id="timer"
                    name="timer"
                    step=".5"
                    required
                    value={ countdown }
                    onChange={ handleCountdown }
                />
                <div className="inputField__unit">
                    min
                </div>
                <div>
                    {
                        `${String(Math.floor(time / 60))}:${String(Math.floor(time % 60)).padStart(2, '0')}`
                    }
                </div>

                <div>
                    <button
                        className="startButton"
                        onClick={ handleStartButton }
                    >
                        Start
                    </button>
                    <button
                        className="stopButton"
                        onClick={ handleStopButton }
                    >
                        Stop
                    </button>
                    <button
                        className="resetButton"
                        onClick={ handleResetButton }
                    >
                        Reset
                    </button>
                </div>
                
                <div>
                    <progress
                        id="progress-bar"
                        // max="0"
                        value={ time }
                        onChange={e => setCountdown(e.target.value)}
                    >
                        
                    </progress>
                </div>

            </div>
        </div>
    );
};

export default Timer;