import React from 'react';

const MovesCount = ({ hits, fails }) => {
    return (
        <div
            className="mb-5 ring-1 ring-gray-900/5 bg-white/65 rounded-lg grid grid-cols-2 divide-x shadow-lg"
            data-testid="moves-count"
        >
            <div className="py-2 px-5">
                <div className="inline text-center">
                    <p className="text-3xl font-bold text-green-500">{hits}</p>
                    <p>{hits === 1 ? 'hit' : 'hits'}</p>
                </div>
            </div>
            <div className="py-2 px-5">
                <div className="inline text-center">
                    <p className="text-3xl font-bold text-red-600">{fails}</p>
                    <p>{fails === 1 ? 'fail' : 'fails'}</p>
                </div>
            </div>
        </div>
    );
};

export default MovesCount;