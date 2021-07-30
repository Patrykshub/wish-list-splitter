import React, { Fragment } from "react";
import { useRef, useState } from "react";

import classes from "./Modal.module.css";

const ModalLogIn: React.FC<{
  onHideModal: () => void;
  onShowModal: () => void;
}> = (props) => {
  const Backdrop: React.FC<{ onHideModal: () => void }> = (props) => {
    return (
      <div>
        {" "}
        className={classes.backdrop} onClick={props.onHideModal}{" "}
      </div>
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

   const [formIsValid, setFormIsValid] = useState(false);

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

   // const nameInputClasses = formIsValid ?  'classes.input' : 'input invalid'
  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <form className={classes.input} onSubmit={submitHandler}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="text"
            // value=
            ref={enteredEmailRef}
          ></input>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            ref={enteredPasswordRef}
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
