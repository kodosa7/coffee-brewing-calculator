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
            <div className="row">
                <div className="col-md">
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
                            required
                            value={countdown}
                            onChange={handleCountdown}
                        />
                        <span className="input-group-text">min</span>
                    </div>
                </div>

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
                        aria-valuenow={ countdown * 60 - time }
                        aria-valuemin="0" aria-valuemax={ countdown * 60 }
                        style={{ "--bs-progress-height": "2.3rem" }}
                    >
                        <div
                            className="progress-bar bg-#0075ff"
                            style={{ width: `calc(${ countdown * 60 - time } / ${ countdown * 60 } * 100%)` }}>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Timer;
