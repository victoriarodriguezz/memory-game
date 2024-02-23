import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.styles.scss';

const MainLayout = () => {
    return (
        <div className="main-layout" data-testid="main-layout">
            <div
                aria-hidden="true"
                className="main-layout__blur-container"
            >
                <div className="main-layout__blur-container__blur rotate-1" />
            </div>

            <Outlet />

            <div
                aria-hidden="true"
                className="main-layout__blur-container top-1/4"
            >
                <div className="main-layout__blur-container__blur right-0" />
            </div>
        </div>
    );
};

export default MainLayout;