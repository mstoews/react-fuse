import SecondPage from './SecondPage';

const SecondpageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'second-page',
      element: <SecondPage />,
    },
  ],
};

export default SecondpageConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';
const Example = React.lazy(() => import('./Example'));

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : 'example',
            element: <Example/>
        }
    ]
};

export default ExampleConfig;

*/
