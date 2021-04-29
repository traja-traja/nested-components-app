import React, { Component } from "react";

import styles from './post.module.scss'

type PostProps = {
  title: string
}

export default class Post extends Component<PostProps> {
  render() {
    return (
      <div className={styles.main}>
        <h1 className={styles.header}>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}
