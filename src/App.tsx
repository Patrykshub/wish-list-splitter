import React, { useState } from "react";

import HomePage from "./components/Layout/HomePage";
import ModalLogIn from "./components/Modal/ModalLogIn";

const App: React.FC<{}> = (props) => {
  const [LogInIsShown, setLogInIsShown] = useState(false);

  const showModalHandler = () => {
    setLogInIsShown(true);
  };

  const hideModalHandler = () => {
    setLogInIsShown(false);
  }

  return (
    <div>
      { LogInIsShown && <ModalLogIn onHideModal={hideModalHandler} onShowModal={showModalHandler} />}
      <HomePage onShowHandler={showModalHandler}/>
    </div>
  );
}

export default App;
