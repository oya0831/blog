import React from 'react'

import BlogIndexPage from '../index'
import StateContext from '../../../contexts/state'

export default class OwnerBlogIndexPage extends React.Component {
  state = { day: "owner" }
  render() {
    return (
      <StateContext.Provider value={ this.state }>
        <BlogIndexPage />
      </StateContext.Provider>
    )
  }
}

