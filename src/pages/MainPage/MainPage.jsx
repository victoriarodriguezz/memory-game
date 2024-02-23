import { useEffect, useState } from 'react';

import UserName from "../../components/mainPage/UserName";
import MemoryGame from "../../components/mainPage/MemoryGame";
import useCache from '../../hooks/useCache';

const MainPage = () => {
  const { userName, updateUserName } = useCache();
  const [askUserName, setAskUserName] = useState(true);

  const handleGoToPlay = (name) => {
    updateUserName(name);
    setAskUserName(false);
  };

  useEffect(() => {
    if (userName) {
      setAskUserName(false);
    }
  }, [userName]);

  return (
    <>
      {askUserName ? <UserName goToPlay={handleGoToPlay} askUserName={askUserName} /> : <MemoryGame />}
    </>
  );
};

export default MainPage;


