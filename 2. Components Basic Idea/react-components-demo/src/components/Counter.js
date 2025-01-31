import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(props.countStart);

  let title = "Counter";
  switch (counter) {
    case 1:
      title = "First Blood";
      break;
    case 2:
      title = "Double kill";
      break;
    case 3:
      title = "Triple kill";
      break;
    case 4:
      title = "Multi kill";
      break;
    case 5:
      title = "Unstoppable";
      break;
    default:
      title = "Counter";
      break;
  }

  const btnIncrementCounterHandler = () => {
    setCounter((state) => state + 1);
  };

  const btnDecrementCounterHandler = () => {
    setCounter((state) => state - 1);
  };

  function clearCounterHandler() {
    setCounter(props.countStart);
  }

  return (
    <div>
      <p style={{ fontSize: counter + 10 + "px" }}>
        {counter > 5 ? "Godlike" : title}: {counter}
      </p>
      {counter < 10 ? (
        <button onClick={btnIncrementCounterHandler}>+</button>
      ) : null}

      {props.canReset && (
        <button onClick={clearCounterHandler}>
          set to: {props.countStart}
        </button>
      )}

      <button onClick={btnDecrementCounterHandler}>-</button>
    </div>
  );
}

export default Counter;
