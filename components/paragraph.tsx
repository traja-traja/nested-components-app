import React, { Component } from "react";

import styles from './paragraph.module.scss'

export default class Paragraph extends Component {
  render() {
    return (
      <p className={styles.paragraph}>
        {this.props.children}
      </p>
    )
  }
}
