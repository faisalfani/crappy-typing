import dynamic from 'next/dynamic';
import React from 'react';

const DynamicComponentWithNoSSR = dynamic(() => import('./Words'), {
  ssr: false,
});

export default React.memo(DynamicComponentWithNoSSR);
