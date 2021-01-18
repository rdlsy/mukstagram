import React from 'react';
import { LoadingBlock } from './style';

export default function Loading() {
  return (
    <LoadingBlock>
      <div className="Loading">
        <span className="l1"></span>
        <span className="l2"></span>
        <span className="l3"></span>
      </div>
    </LoadingBlock>
  );
}