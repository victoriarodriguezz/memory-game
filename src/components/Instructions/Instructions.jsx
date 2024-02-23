import React from 'react';
import useCache from '../../hooks/useCache/useCache';
import MovesCount from '../MovesCount';
import Button from '../Button';

const Instructions = ({ hits, fails, restartGame, areCardsBlocked }) => {
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

            <Button
                onClick={restartGame}
                isDisabled={areCardsBlocked}
            >
                Restart game
            </Button>
        </div>
    );
};

export default Instructions;