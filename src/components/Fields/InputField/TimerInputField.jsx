const TimerInputField = (props) => {
    const countdown = props.countdown;
    const handleCountdown = props.handleCountdown

    return (
        <>
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
                        min="0"
                        required
                        value={countdown}
                        onChange={handleCountdown}
                    />
                    <span className="input-group-text">min</span>
                </div>
            </div>
            
        </>
    );
};

export default TimerInputField;