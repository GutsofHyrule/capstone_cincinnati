import React, { useState, useEffect } from 'react';

const center = {
  textAlign: 'Center'
};

const btnStyle = {
  paddingRight: '20px',
  paddingLeft: '20px'
};

const textStyle = {
  fontSize: '50px',
  padding: '20px',
  verticalAlign: 'Middle'
};

function Btn({ children, onClick }) {
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

function Counter() {
  const [counter, updateCounter] = useState(0);
  const [randomText, updaterandomText] = useState('This is random Text');

  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

  function handleReset() {
    updateCounter(0);
    updaterandomText(`Random text is updated`);
  }

  useEffect(() => {
    console.log('component lifecycle');
    // updaterandomText(`Random text is updated`);
  }, [counter]);

  return (
    <div style={center}>
      <Btn onClick={handleIncrement}>+</Btn>
      <span style={textStyle}>{counter}</span>
      <Btn onClick={handleDecrement}>-</Btn>
      <div style={center}>
        <Btn onClick={handleReset}>Reset</Btn>
      </div>
      <br />
  
    </div>
  );
}

export default Counter;