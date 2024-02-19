const ProgressBar = (props) => {
    const seconds = props.seconds;
    const time = props.time;

    return (
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
    );
};

export default ProgressBar;