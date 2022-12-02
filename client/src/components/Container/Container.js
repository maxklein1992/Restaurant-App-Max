import React from "react";

import styles from "./Container.module.scss";

const Container = ({ children, className, ...props }) => {
  const classNames = [styles.container, className].join(" ").trim();

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
