import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '../shared';
import { Main } from '../pages';

const appRouter = createBrowserRouter([
  {
    path: Routes.root,
    element: <Main />,
  },
]);

export default appRouter;
