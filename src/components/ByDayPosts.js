import React from 'react'

import Roll from './Roll'
import StateContext from '../contexts/state'

const ByDayPosts = ({
  posts,
  notImage
}) => ( 
  <StateContext.Consumer>
  { ({ state }) => { 
    const str = posts.map(value => {
      if(value.node.frontmatter.dayKey===state) {
        return value
      }
      else {
        return null
      }
    })
    const results=str.filter(str => str);
    return <Roll results={results} notImage={notImage} />
  }}
  </StateContext.Consumer>
)

export default ByDayPosts
