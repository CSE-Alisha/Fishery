import { HashLink as Link } from "react-router-hash-link";
import classes from "./action-buttons.module.css";

const ActionButtons = (props) => {
  const classname1 = `${classes.button} ${classes.contact} ${classes.link}`;
  const classname2 = `${classes.button} ${classes.gallery} ${classes.link}`;

  return (
    <div className={classes["action-buttons"]}>
      <Link to="#Contact" className={classname1}>
        Contact Now
      </Link>
      <Link to="#FreshWaterFish" className={classname2}>
        Our Gallery
      </Link>
    </div>
  );
};

export default ActionButtons;
