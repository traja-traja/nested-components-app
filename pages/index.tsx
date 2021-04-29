import React, { Component } from 'react'

import P from '../components/paragraph'
import Post from '../components/post'

import styles from './index.module.scss'

export default class Home extends Component { 
  render() {
    const posts = [
      {
        title: 'My first blog post',
        key: 'a1',
        paragraphs: [
          'Hello there',
          'This is an example of a componentized blog post'
        ]
      }, {
        title: 'My second blog post',
        key: 'a2',
        paragraphs: [
          'Hello there',
          'This is another example.'
        ]
      }, {
        title: 'The final blog post',
        key: 'a3',
        paragraphs: [
          'C’est fin'
        ]
      }
    ];
    
    return (
      <div className={styles.main}>
        {posts.map(post => {
          return (
            <Post title={post.title} key={post.key}>
              {post.paragraphs.map((paragraph, index) => {
                return (
                  <P key={index.toString()}>{paragraph}</P>
                )
              })}
            </Post>
          )
        })
        .reduce((acc, curr) => {
          return (
            <>
              {acc}
              <hr className={styles.hr} />
              {curr}
            </>
          )
        })
        }
        
      </div>
    )
  }
}
