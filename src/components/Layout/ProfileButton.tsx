import classes from "./HeaderButton.module.css";

const ProfileButton: React.FC = (props) => {
  return (
    <button className={classes.button}>
      <span>Profile</span>
    </button>
  );
};
export default ProfileButton;
