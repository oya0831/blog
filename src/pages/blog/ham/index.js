import React from 'react'

import BlogIndexPage from '../index'
import BlogRollContext from '../../../contexts/BlogRollContext'

export default class HamBlogIndexPage extends React.Component {
  state = { path: "ham" }
  render() {
    return (  
      <BlogRollContext.Provider value={ this.state }>
        <BlogIndexPage />
      </BlogRollContext.Provider>
    )
  }
}
