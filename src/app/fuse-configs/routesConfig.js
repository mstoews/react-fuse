import { Navigate } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import LandingPageConfig from 'app/main/LandingPage/LandingPageConfig';
import NotesAppConfig from 'app/main/notes/NotesAppConfig';
import SecondPageConfig from 'app/main/second-page/SecondPageConfig';
import PartyPageConfig from 'app/main/PartyPage/partyPageConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';

const routeConfigs = [LandingPageConfig, SecondPageConfig, NotesAppConfig, PartyPageConfig];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    element: <Navigate to="example" />,
  },
  // {
  //   path: 'second-page',
  //   element: <Navigate to="second-page" />,
  // },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
