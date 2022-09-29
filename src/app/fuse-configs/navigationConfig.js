const navigationConfig = [
  {
    id: 'applications',
    title: 'Menu',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'example-component',
        title: 'Main Page',
        type: 'item',
        icon: 'whatshot',
        url: 'example',
      },
      {
        id: 'landing-page',
        title: 'Landing Page',
        type: 'item',
        icon: 'chat',
        url: 'second-page',
      },
      {
        id: 'notes',
        title: 'Blog Posts',
        type: 'item',
        icon: 'addchart',
        url: 'blog',
      },
      {
        id: 'partypage',
        title: 'Simple Data Grid',
        type: 'item',
        icon: 'addchart',
        url: 'partypage',
      },
    ],
  },
];

export default navigationConfig;
