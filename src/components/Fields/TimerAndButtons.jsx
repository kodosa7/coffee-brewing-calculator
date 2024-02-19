const TimerAndButtons = (props) => {
    const time = props.time;
    const handleStartButton = props.handleStartButton;
    const handleStopButton = props.handleStopButton;
    const handleResetButton = props.handleResetButton;

    return (
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
    );
};

export default TimerAndButtons;