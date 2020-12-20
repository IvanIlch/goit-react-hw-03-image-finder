import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

export default function Button({ onClick }) {
  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};
