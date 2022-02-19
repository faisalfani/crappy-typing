import dynamic from 'next/dynamic';
import React from 'react';

import Words from './Words';

const DynamicComponentWithNoSSR = dynamic(() => import('./Words'), {
  ssr: false,
});

export default React.memo(DynamicComponentWithNoSSR);
