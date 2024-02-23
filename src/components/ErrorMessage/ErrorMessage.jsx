import React from 'react';

const ErrorMessage = () => {
    return (
        <div className="text-center pt-14">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Oops!
            </h1>
            <p className="mt-6 text-lg text-gray-600">
                There was an error, please try again later.
            </p>
            <button
                type="submit"
                className="flex-none rounded-md bg-emerald-500 px-3.5 py-2.5 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
                Try again
            </button>
        </div>
    );
}

export default ErrorMessage;