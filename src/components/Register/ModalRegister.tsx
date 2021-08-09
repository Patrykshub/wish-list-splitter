import React, { Fragment } from "react";

import classes from './Modal_Register.module.css'

const ModalRegister: React.FC <{onHideModal: () => void; onShowModal: () => void}> = (props) => {

  const Backdrop: React.FC <{onHideModal: () => void}> = (props) => {
    return <div className={classes.backdrop_register} onClick={props.onHideModal} />;
  };

  const Modal: React.FC <{onShowModal: () => void}> = (props) => {
    return (
      <div>
        <div className={classes.modal_register}>{props.children}</div>
      </div>
    );
  };

  const registerHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <form className={classes.input} onSubmit={registerHandler}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" placeholder='Enter your first name.'></input>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder='Enter your last name.'></input>
          <label htmlFor="age">Birth Date</label>
          <input id="age" type="text" placeholder='Enter your birth date.'></input>
          <label htmlFor="adress">Adress</label>
          <input id="adress" type="text" placeholder='Enter your adress.'></input>
          <div className={classes.buttons_input}>
            <button className={classes.button} onSubmit={registerHandler}>Register</button>
            <button className={classes.button} onClick={props.onHideModal}>Close</button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalRegister;
