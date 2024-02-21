import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
            children: [
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" replace /> }
            ]
        },
        {
            path: '/',
            children: [
                { path: '', element: <MainPage /> },
            ]
        },
    ]);
};


const MainPage = Loadable(lazy(() => import('../pages/MainPage')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));