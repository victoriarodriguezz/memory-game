

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="text-center pt-14 mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Sorry, page not found!
            </h1>
            <p className="my-6 text-lg text-gray-600">
                Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check
                your spelling.
            </p>
            <RouterLink
                to="/"
                className="flex-none rounded-md bg-emerald-500 px-3.5 py-2.5 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
                Go to Home
            </RouterLink>
        </div>
    );
};

export default Page404;