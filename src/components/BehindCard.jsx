const BehindCard = ({ onCardClick }) => {
    return (
        <div
            className="w-full h-28 sm:h-44 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-md flex justify-center items-center cursor-pointer"
            onClick={onCardClick}
        >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-100 to-slate-300 flex justify-center items-center">
                <p className="text-5xl font-bold text-purple-400">?</p>
            </div>
        </div>
    )
};

export default BehindCard;