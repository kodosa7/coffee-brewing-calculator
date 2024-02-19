import { useState, useEffect } from "react";
import TimerInputField from "./Fields/InputField/TimerInputField";
import TimerAndButtons from "./Fields/TimerAndButtons";
import ProgressBar from "./Fields/ProgressBar";

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
                <TimerInputField
                    countdown={ countdown }
                    handleCountdown={ handleCountdown }
                />
                <TimerAndButtons 
                    time={ time }
                    handleStartButton={ handleStartButton }
                    handleStopButton={ handleStopButton }
                    handleResetButton={ handleResetButton }
                />
                <ProgressBar
                    seconds={ seconds }
                    time={ time }
                />
            </div>
        </>
    );
};

export default Timer;
