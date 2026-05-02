import { useState } from "react";

const User = ({ name }) => {
  // We can use props as argument and use props.name below but it's good to destructure in starting

  //  Creating state variables in functional component
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Faridabad</h3>
      <h4>Contact: 98xxx</h4>
    </div>
  );
};

export default User;
