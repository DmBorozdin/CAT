import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '../shared';
import Main from '../pages/main/Main';
import Second from '../pages/second/Second';

const appRouter = createBrowserRouter([
  {
    path: Routes.root,
    element: <Main />,
  },
  {
    path: Routes.second,
    element: <Second />,
  },
]);

export default appRouter;
