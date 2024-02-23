const Button = ({ onClick, isDisabled, children, ...props }) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className="flex-none rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:bg-slate-300"
            {...props}
        >
            {children}
        </button>
    )
};

export default Button;