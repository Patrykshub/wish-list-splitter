import React, { useState } from "react";

import classes from "./Profile.module.css";

const Profile = (validateValue: any) => {
  const [changingMode, setChangingMode] = useState(false);
  const [editing, setEditing] = useState();
  const [value, setValue] = useState();

    const modeHandler = () => {
        setChangingMode(true);
    }

  const nameHandler = (event: any) => {
    setEditing(event.target.value);
  };

  const save = () => {
    setValue(editing);
    setChangingMode(false);
  };

  return (
    <div className={classes.profile}>
      <p >Your Profile</p>
      <div>
        <label className={classes.profile_user}>Name:</label>
        <label> {value}</label>
        </div>
        <div>
        <label className={classes.profile_user}>Age:</label>
        <label> {value}</label>

        {!changingMode && <button onClick={modeHandler}>Edit</button>}
        {changingMode && (
          <>
            <input onChange={nameHandler}></input>
            <button onClick={save}>Ok</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
