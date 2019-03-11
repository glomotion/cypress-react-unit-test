import React from 'react';

import { DoubleNestedChild } from './DoubleNestedChild.jsx';

export const NestedChild = () => <div style={{ background: 'gold' }}>
  <p>Nested Child!</p>
  <DoubleNestedChild />
</div>

export default { NestedChild };
