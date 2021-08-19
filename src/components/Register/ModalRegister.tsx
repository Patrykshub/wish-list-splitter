import React, { Fragment, useRef, useState } from "react";
import Modal from "../Login/Modal";

import classes from "./Modal_Register.module.css";

const ModalRegister: React.FC<{
  onHideModal: () => void;
  onShowModal: () => void;
  onShowHandler: () => void;
}> = (props) => {
  const Backdrop: React.FC<{ onHideModal: () => void }> = (props) => {
    return (
      <div className={classes.backdrop_register} onClick={props.onHideModal} />
    );
  };
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();

  const [isLoading, setIsLoading] = useState<boolean>();
  const [registered, setRegistered] = useState<boolean>();
  

  const registerHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    setIsLoading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVVPHKxp6tMP6Dtvd-l9KciCQaa9-FsXA",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsLoading(false);

      if (res.ok) {
        setRegistered(true);
        setTimeout(() => {
          props.onHideModal();
        }, 1000)
        
        setTimeout(() => {
          props.onShowHandler();
        }, 1333)
      } else {
        res.json().then((data) => {
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
        });
      }
    });
    setRegistered(false);
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        {registered && <div className={classes.div_registered}>
          <p className={classes.registered}>You are successfully registered!</p>
          </div>}
      
        <form className={classes.input} onSubmit={registerHandler}>
          <label htmlFor="adress">E-mail</label>
          <input
            id="email"
            ref={emailInputRef}
            type="email"
            placeholder="Enter your E-mail."
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={passwordInputRef}
            type="password"
            placeholder="Enter your password."
          ></input>
          <div className={classes.buttons_input}>
            {!isLoading && (
              <button className={classes.button} onSubmit={registerHandler}>
                Register
              </button>
            )}
            {isLoading && <p>Loading...</p>}
            <button className={classes.button} onClick={props.onHideModal}>
              Close
            </button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalRegister;
