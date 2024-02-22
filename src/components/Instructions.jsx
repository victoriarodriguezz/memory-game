import useCache from '../hooks/useCache';
import MovesCount from './MovesCount';

const Instructions = ({ hits, fails, restartGame }) => {
    const { userName } = useCache();

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">Memory Game</h1>
            <ul className="list-inside list-disc">
                <li>The objective of this game is to match pairs of cards with identical animals.</li>
                <li>Click the cards and find the pairs!.</li>
            </ul>
            <h2 className="text-2xl my-3 font-bold tracking-tight text-gray-900">
                {`${userName} you have:`}
            </h2>
            <MovesCount hits={hits} fails={fails} />

            <button
                onClick={restartGame}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
                Restart game
            </button>
        </div>
    );
};

export default Instructions;