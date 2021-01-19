import React, { useEffect, useState } from 'react';
import { ToastBlock } from './style';

function ToastPopup({ text }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false);
    }, 1000)
  }, []);
  return (
    <ToastBlock className={animate ? 'open' : ''}>
      {text}
    </ToastBlock>
  );
}

export default ToastPopup;