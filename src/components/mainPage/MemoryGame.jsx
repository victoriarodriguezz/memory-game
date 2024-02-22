import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// hooks
import useAnimals from '../../hooks/useAnimals';
//utils
import shuffle from '../../utils/shuffle';
// components
import BehindCard from '../BehindCard';
import ErrorMessage from '../ErrorMessage';
import Instructions from '../Instructions';

const MemoryGame = () => {
    const { animals, isSuccess, isError, isLoading } = useAnimals();
    const [cards, setCards] = useState(null);
    const [firstMove, setFirstMove] = useState(null);
    const [secondMove, setSecondMove] = useState(null);
    const [hitsCount, setHitsCount] = useState(0);
    const [failCount, setFailCount] = useState(0);
    const [areCardsBlocked, setAreCardsBlocked] = useState(false);

    const setAnimalCards = () => {
        let shuffleAnimals = shuffle(animals)
        setCards(shuffleAnimals);
    }

    useEffect(() => {
        if (isSuccess && animals && !isLoading && !cards) {
            setAnimalCards()
        };
    }, [animals, cards, isLoading, isSuccess, setCards]);

    useEffect(() => {
        if (firstMove && secondMove) {
            setAreCardsBlocked(true);
            if (firstMove.uuid === secondMove.uuid) {
                setCards((prevArray) => {
                    return prevArray.map((card) => {
                        if (card.uuid === firstMove.uuid) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                setHitsCount((prevVal) => prevVal + 1);
                turnFinished();
            } else if (firstMove.uuid !== secondMove.uuid) {
                setTimeout(() => {
                    setFailCount((prevVal) => prevVal + 1);
                    turnFinished();
                }, 1000);
            }
        }
    }, [firstMove, secondMove]);

    const turnFinished = () => {
        setFirstMove(null);
        setSecondMove(null);
        setAreCardsBlocked(false)
    }

    const handleMoves = (card) => {
        if (!areCardsBlocked) {
            if (firstMove && firstMove !== card) {
                setSecondMove(card);
            } else {
                setFirstMove(card);
            }
        }
    };

    const restartGame = () => {
        turnFinished();
        setHitsCount(0);
        setFailCount(0);
        setAnimalCards();
    }

    return (
        <div className="mx-auto max-w-6xl">

            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <Instructions hits={hitsCount} fails={failCount} restartGame={restartGame} />

                {isSuccess &&
                    <div className="col-span-1 sm:col-span-2 grid gap-3 grid-cols-4 sm:grid-cols-5">
                        {cards && cards.map((card) => {
                            return (
                                <div key={card.id}>
                                    <ReactCardFlip flipDirection="horizontal" isFlipped={card === firstMove ||
                                        card === secondMove || card.matched}>
                                        <BehindCard onCardClick={() => handleMoves(card)} />

                                        <div className="w-full h-28 sm:h-44">
                                            <img className="object-cover w-full h-full rounded-md" src={card.image.url} alt={card.image.title} />
                                        </div>
                                    </ReactCardFlip>
                                </div>
                            );
                        })}
                    </div>
                }

                {isError && <ErrorMessage />}
            </div>
        </div>
    );
};

export default MemoryGame;