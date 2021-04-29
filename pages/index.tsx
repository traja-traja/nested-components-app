import React, { Component } from 'react'

import P from '../components/paragraph'
import Post from '../components/post'

import styles from './index.module.scss'

export default class Home extends Component {  
  render() {
    return (
      <div className={styles.main}>
        <Post title="My first blog post">
          <P>Hello there</P>
          <P>This is an example of a componentized blog post</P>
        </Post>
  
        <hr className={styles.hr} />
  
        <Post title="My second blog post">
          <P>Hello there</P>
          <P>This is another example.</P>
          <P>Wa-hoo!</P>
        </Post>
  
        <hr className={styles.hr} />
  
        <Post title="The final blog post">
          <P>C’est fin</P>
        </Post>
      </div>
    )
  }
}
