import { useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    
    const handleTime = (e) => {
        setTime(value);
    }

    const handleStartButton = () => {
        console.log("Start button pressed");
    }

    const handleStopButton = () => {
        console.log("Stop button pressed");
    }

    const handleResetButton = () => {
        console.log("Reset button pressed");
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
                    Timer view
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
                    Progress bar view
                </div>

            </div>
        </div>
    );
};

export default Timer;