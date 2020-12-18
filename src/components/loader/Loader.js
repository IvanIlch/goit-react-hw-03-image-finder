import React, { Component } from "react";
import styles from "./Loader.module.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Spiner extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <Loader type="Circles" color="#00BFFF" height={150} width={150} />
      </div>
    );
  }
}
