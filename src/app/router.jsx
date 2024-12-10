import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const appRouter = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactus">Contact Us</Link>
        <br />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: 'Home',
      },
      {
        path: '/about',
        element: 'About',
      },
      {
        path: '/contactus',
        element: 'contact Us',
      },
    ],
    errorElement: '404: PageNotFound',
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};
