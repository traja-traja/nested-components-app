import React, { Component } from 'react'

import P from '../components/paragraph'
import Post from '../components/post'

import styles from './index.module.scss'

type HomeState = {
  data: {
    title: string,
    id: string,
    paragraphs: string[]
  }[],
  hasError: boolean
}

export default class Home extends Component<{}, HomeState> {
  componentDidMount() {
    fetch('http://www.traja.cz/nested-components-app/sample.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data
        });
      })
      .catch(() => {
        this.setState({
          hasError: true
        })
      });
  }
  
  render() {
    if (this.state && this.state.hasError) {
      return <div>An error occured during loading data.</div>
    } else if (!this.state || !this.state.data) {
      return <div>Loading data...</div>
    }
    
    return (
      <div className={styles.main}>
        {this.state.data.map(post => {
          return (
            <Post title={post.title} key={post.id}>
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
