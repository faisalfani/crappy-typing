import dynamic from 'next/dynamic';

import Words from './Words';

const DynamicComponentWithNoSSR = dynamic(() => import('./Words'), {
  ssr: false,
});

export default DynamicComponentWithNoSSR;
