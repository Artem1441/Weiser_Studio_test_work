import React from "react";
import classes from "./AppModal.module.scss";

export const AppModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];

  visible && rootClasses.push(classes.active);

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modal_content}
        onClick={(event) => event.stopPropagation()}
      >
        {/* stopPropagation - отменяет дальнейшее развитие действий (в данном случае для отмены закрытия модалки при клике на белую зону) */}
        {children}
      </div>
    </div>
  );
};
