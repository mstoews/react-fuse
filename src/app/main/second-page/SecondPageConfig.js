import i18next from 'i18next';
import SecondPage from './SecondPage';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

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
