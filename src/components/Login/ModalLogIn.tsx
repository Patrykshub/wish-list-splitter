import React, { Fragment } from "react";
import { useRef, useState } from "react";

import classes from "./Modal.module.css";

const ModalLogIn: React.FC<{
  onHideModal: () => void;
  onShowModal: () => void;
}> = (props) => {
  const Backdrop: React.FC<{ onHideModal: () => void }> = (props) => {
    return (
      <div className={classes.backdrop_login} onClick={props.onHideModal} />
    );
  };

  const Modal: React.FC<{
    onShowModal: () => void;
  }> = (props) => {
    return (
      <div>
        <div className={classes.modal}>{props.children}</div>
      </div>
    );
  };
   const [emailIsValid, setEmailIsValid] = useState("")
   const [formIsValid, setFormIsValid] = useState(true);

  const enteredEmailRef = useRef<HTMLInputElement>(null);
  const enteredPasswordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = enteredEmailRef.current!.value;
    console.log(enteredEmail);
    if (enteredEmail.trim().length === 0) {
      setFormIsValid(false);
    }


    const enteredPassword = enteredPasswordRef.current!.value;
    console.log(enteredPassword);
    if (enteredPassword.trim().length === 0) {
      setFormIsValid(false);
    }
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <form className={`${classes['input']} ${!formIsValid && classes.invalid}`} onSubmit={submitHandler}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="text"
            // value=
            ref={enteredEmailRef}
            placeholder="Enter your E-mail-Adress"
          ></input>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            ref={enteredPasswordRef}
            placeholder="Enter your password"
          ></input>

          <div className={classes.buttons_input}>
            <button className={classes.button}>Log in</button>
            <button className={classes.button} onClick={props.onHideModal}>
              Close
            </button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalLogIn;
