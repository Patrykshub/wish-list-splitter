import React, { useState } from "react";

import cls from "./Profile_grid.module.css";

const Profile = (validateValue: any) => {
  const [changingMode, setChangingMode] = useState(false);
  const [editing, setEditing] = useState();
  const [valueName, setValueName] = useState();
  // const [valueAge, setValueAge] = useState();


  const modeHandler = () => {
    setChangingMode(true);
  };

  const nameHandler = (event: any) => {
    setEditing(event.target.value);
  };

  const save = () => {
    setValueName(editing);
    setChangingMode(false);
  };

  return (
    <div className={cls.container}>
      <div className={cls.item_a}>
        <p>Your Profile</p>
      </div>

      <div className={cls.item_b}>
        <div>
          <label>Name:</label>
          <label> {valueName}</label>
        </div>

        <div>
          <label>Age:</label>
          <label> </label>
        </div>
      </div>
      <div className={cls.item_b_inputs}>
        {changingMode && <input onChange={nameHandler}></input>}
        {changingMode && <input onChange={nameHandler}></input>}
      </div>

      <div className={cls.button_edit}>
        {changingMode && <button onClick={save}>Ok</button>}
        {!changingMode && <button onClick={modeHandler}>Edit</button>}
      </div>

      <div className={cls.item_c}>
        <p>sidebar</p>
      </div>

      <div className={cls.item_d}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default Profile;
