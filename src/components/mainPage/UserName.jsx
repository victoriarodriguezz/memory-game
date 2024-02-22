import { useState } from "react";

const UserName = ({ goToPlay }) => {
    const [userName, setUserName] = useState('');
    const isButtonDisabled = userName.length < 2;

    const handleNameInput = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Memory game
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Match the pairs and see how good your memory really is!
                </p>
            </div>

            <div className="mt-6 flex justify-center">
                <div className="flex max-w-md gap-x-4">
                    <label htmlFor="user-name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={userName}
                        onChange={handleNameInput}
                        className="min-w-0 flex-auto rounded-md border-2 border-slate-200 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6"
                        placeholder="Enter your name"
                    />
                    <button
                        type="submit"
                        onClick={() => goToPlay(userName)}
                        disabled={isButtonDisabled}
                        className="flex-none rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:bg-slate-300"
                    >
                        Let's play!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserName;