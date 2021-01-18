import React from 'react';
import { ToastBlock } from './style';

function ToastPopup({ open, text }) {
  return (
    <ToastBlock className={open ? 'open' : ''}>
      {text}
    </ToastBlock>
  );
}

export default ToastPopup;