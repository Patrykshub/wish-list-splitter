import React, { useState } from "react";

type LoginObj = {
    token: any,
    isLoggedIn: boolean,
    login: (token: string) => void,
    logout: () => void
};

const AuthContext = React.createContext<LoginObj>({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC = (props: any) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;

  const logInHandler = (token:any) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue: LoginObj = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
