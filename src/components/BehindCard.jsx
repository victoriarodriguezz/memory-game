const BehindCard = ({ onCardClick }) => {
    return (
        <div
            className="w-full h-28 sm:h-44 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-400 rounded-md flex justify-center items-center cursor-pointer"
            onClick={onCardClick}
        >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-100 to-slate-300 flex justify-center items-center">
                <p className="text-5xl font-bold text-emerald-500">?</p>
            </div>
        </div>
    )
};

export default BehindCard;