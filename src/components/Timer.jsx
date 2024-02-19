import { useState, useEffect } from "react";
import TimerInputField from "./Fields/InputField/TimerInputField";

const Timer = () => {
    const [time, setTime] = useState(600);
    const [isRunning, setIsRunning] = useState(false);
    const [countdown, setCountdown] = useState(10);
    const [seconds, setSeconds] = useState(countdown * 60);

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning, time]);

    const handleCountdown = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }

        setCountdown(e.target.value);
        setIsRunning(false);
        setTime(e.target.value * 60);
    };

    const handleStartButton = () => {
        console.log("Start button pressed");
        setIsRunning(true);
        setSeconds(countdown * 60);
    };

    const handleStopButton = () => {
        console.log("Stop button pressed");
        setIsRunning(false);
    };

    const handleResetButton = () => {
        console.log("Reset button pressed");
        setIsRunning(false);
        setTime(seconds);
    };

    return (
        <>
            <div className="row row-gap-3">
                {/* <div className="col-md">
                    <div className="form-label">
                        <label htmlFor="field">Timer</label>
                    </div>
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="number"
                            id="timer"
                            name="timer"
                            step=".5"
                            min="0"
                            required
                            value={countdown}
                            onChange={handleCountdown}
                        />
                        <span className="input-group-text">min</span>
                    </div>
                </div> */}
                
                <TimerInputField
                    countdown={ countdown }
                    handleCountdown={ handleCountdown }
                />

                <div className="col-md-6 d-flex align-items-end">
                    <div className="input-group">
                        <input
                            className="form-control"
                            id="timer-disp"
                            name="timer-disp"
                            readOnly
                            value={`${String(Math.floor(time / 60))}:${String(Math.floor(time % 60)).padStart(2, "0")}`}
                        />

                        <button className="btn btn-success" onClick={handleStartButton}>
                            Start
                        </button>
                        <button className="btn btn-danger" onClick={handleStopButton}>
                            Stop
                        </button>
                        <button className="btn btn-dark" onClick={handleResetButton}>
                            Reset
                        </button>
                    </div>
                </div>

                <div className="col-md d-flex align-items-end">
                    <div
                        className="progress w-100"
                        role="progressbar"
                        aria-label="Progress bar"
                        aria-valuenow={ seconds - time }
                        aria-valuemin="0" aria-valuemax={ seconds }
                        style={{ "--bs-progress-height": "2.3rem" }}
                    >
                        <div
                            className="progress-bar bg-primary"
                            style={{ width: `calc(${ seconds - time } / ${ seconds } * 100%)` }}>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Timer;
