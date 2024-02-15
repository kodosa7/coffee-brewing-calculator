import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(600);
    const [isRunning, setIsRunning] = useState(false);
    const [endReached, setEndReached] = useState(false);
    

    useEffect(() => {
        let timer;
        if (isRunning && time > -1) {
                timer = setInterval(() => {
                    setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 1) {
            setEndReached(true);
        };

        return () => {
            clearInterval(timer);
        };
    }, [isRunning, time]);


    const handleTime = (e) => {
        setTime(time);
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
        setTime(600);
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
                    required
                    value={ time }
                    onChange={ handleTime }
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
                    Progress bar
                </div>

            </div>
        </div>
    );
};

export default Timer;