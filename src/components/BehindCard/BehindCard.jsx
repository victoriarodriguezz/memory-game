import React from 'react';

const BehindCard = ({ onCardClick }) => {
    return (
        <div
            data-testid="behind-card"
            className="w-full h-28 sm:h-44 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 rounded-md flex justify-center items-center cursor-pointer"
            onClick={onCardClick}
        >
            <p className="text-5xl font-bold text-slate-500">?</p>
        </div>
    )
};

export default BehindCard;