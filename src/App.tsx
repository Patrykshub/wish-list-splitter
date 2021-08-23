import React, { useState } from "react";
import { useContext } from "react";

import HomePage from "./components/Layout/HomePage";
import ModalLogIn from "./components/Login/ModalLogIn";
import ModalRegister from "./components/Register/ModalRegister";
import AuthContext from "./store/store";

const App: React.FC = () => {
  const [LogInIsShown, setLogInIsShown] = useState(false);
  const [RegisterIsShown, setRegisterIsShown] = useState(false);

  const authCtx = useContext(AuthContext);

  const showLogInHandler = () => {
    setLogInIsShown(true);
  };
  const hideModalHandler = () => {
    setLogInIsShown(false);
  };

  const showRegisterHandler = () => {
    setRegisterIsShown(true);
  };
  const hideRegisterHandler = () => {
    setRegisterIsShown(false);
  };
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div>
      {LogInIsShown && (
        <ModalLogIn
          onHideModal={hideModalHandler}
          onShowModal={showLogInHandler}
        />
      )}
      {RegisterIsShown && (
        <ModalRegister
          onShowHandler={showLogInHandler}
          onHideModal={hideRegisterHandler}
          onShowModal={showRegisterHandler}
        />
      )}

      <HomePage
        onLogoutHandler={logoutHandler}
        onShowHandler={showLogInHandler}
        onShowRegister={showRegisterHandler}
      />
    </div>
  );
};

export default App;
