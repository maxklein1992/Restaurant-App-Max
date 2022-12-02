import React from "react";

import styles from "./Button.module.scss";

const Button = ({ disabled, label, onClick, className, ...props }) => {
  const classNames = [styles.button, className].join(" ").trim();

  return (
    <button
      aria-disabled={disabled}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
