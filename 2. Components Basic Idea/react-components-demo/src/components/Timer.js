import React from "react";

function Timer(props) {
    const [seconds, setSeconds] = React.useState(props.start);

    // NOT Good practice (useEffect is better)
    setTimeout(() => {
        // setSeconds(seconds + 1);
        setSeconds(state => state + 1);
    }, 1000);

    return (
        <div>
            Time: {seconds}s
        </div>
    );
}

export default Timer;