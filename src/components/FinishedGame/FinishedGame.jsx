import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useCache from '../../hooks/useCache/useCache';
import Button from '../Button';
import MovesCount from '../MovesCount';

const FinishedGame = ({ onRestart, show, hits, fails }) => {
    const { userName } = useCache();

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onRestart}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-4 sm:pb-4">
                                    <div className="flex justify-center">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                                            <Dialog.Title as="h3" className="text-3xl font-bold text-gray-800">
                                                {`¡Contratulations ${userName}!`}
                                            </Dialog.Title>
                                            <p className="text-sm text-gray-500 mt-2 mb-3">
                                                Your score:
                                            </p>

                                            <MovesCount hits={hits} fails={fails} />
                                            <p className="text-sm text-gray-500 mt-1">
                                               Do you want to play again?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <Button type="button" onClick={onRestart}>
                                        New game
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default FinishedGame;