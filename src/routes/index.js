import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// components
import LoadingScreen from '../components/LoadingScreen';
// layouts
import MainLayout from '../layouts/MainLayout';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '*',
            element: <MainLayout />,
            children: [
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" replace /> }
            ]
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '', element: <MainPage /> },
            ]
        },
    ]);
};


const MainPage = Loadable(lazy(() => import('../pages/MainPage')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));