import React from 'react';
import Button from '../Button';

const ErrorMessage = () => {
    return (
        <div className="text-center pt-14">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Oops!
            </h1>
            <p className="mt-6 text-lg text-gray-600">
                There was an error, please try again later.
            </p>
            <Button>
                Try again
            </Button>
        </div>
    );
}

export default ErrorMessage;