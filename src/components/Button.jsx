/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
