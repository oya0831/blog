const ByDayPosts = ({
  posts,
  state
}) => {
  const str = posts.map(value => {
    if(value.node.frontmatter.dayKey===state) {
      return value
    }
    else {
      return null
    }
  })
  const results=str.filter(str => str);
  
  return results
}

export default ByDayPosts
