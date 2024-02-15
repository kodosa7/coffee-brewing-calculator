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
        };

        setCountdown(e.target.value);
        setIsRunning(false);
        setTime(e.target.value * 60);
        console.log(countdown, time);
    };

    const handleStartButton = () => {
        console.log("Start button pressed");
        setIsRunning(true);
    };

    const handleStopButton = () => {
        console.log("Stop button pressed");
        setIsRunning(false);
    };

    const handleResetButton = () => {
        console.log("Reset button pressed");
        setIsRunning(false);
        setTime(countdown * 60);
    };

    return (
        <>
            <div className="">
                <div className="">
                    <label htmlFor="field">Timer</label>
                </div>
                <div className="input-value">
                    <input
                        type="number"
                        id="timer"
                        name="timer"
                        step=".5"
                        required
                        value={ countdown }
                        onChange={ handleCountdown }
                    />
                    <div className="input-unit">
                        min
                    </div>
                </div>
            </div>
            <div className="timer">
                <div className="timer-col">
                    <div className="white-space">
                        <label htmlFor="timer-disp">&nbsp;</label>
                    </div>
                    
                    <input className="timer-display"
                        id="timer-disp"
                        name="timer-disp"
                        value={
                            `${String(Math.floor(time / 60))}:${String(Math.floor(time % 60)).padStart(2, '0')}`
                        }
                    />

                </div>
                <div className="buttons-col">
                    <div className="white-space">
                        <label htmlFor="timer-disp">&nbsp;</label>
                    </div>

                    <div className="timer-buttons">
                        <button
                            className="start"
                            onClick={ handleStartButton }
                        >
                            Start
                        </button>
                        <button
                            className="stop"
                            onClick={ handleStopButton }
                        >
                            Stop
                        </button>
                        <button
                            className="reset"
                            onClick={ handleResetButton }
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <div className="progressbar">
                <div className="white-space">
                        <label htmlFor="timer-disp">&nbsp;</label>
                    </div>
                <progress
                    id="progress-bar"
                    min="0"
                    max={ countdown * 60 }
                    value={ (countdown * 60) - time }
                >
                </progress>
            </div>
        </>
    );
};

export default Timer;