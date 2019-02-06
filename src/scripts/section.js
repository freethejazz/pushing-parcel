import React from 'react';
import Counter from './counter';

export default (props) => (
  <div className="section-content">
    {props.children}
    <Counter />
  </div>
)
