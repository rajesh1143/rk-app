import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '/rk-app/',
    element: (
      <>
        <Link to="/rk-app/">Home</Link>
        <Link to="/rk-app/about">About</Link>
        <Link to="/rk-app/contactus">Contact Us</Link>
        <br />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/rk-app/',
        element: 'Home',
      },
      {
        path: '/rk-app/about',
        element: 'About',
      },
      {
        path: '/rk-app/contactus',
        element: 'contact Us',
      },
    ],
    errorElement: '404: PageNotFound',
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};
