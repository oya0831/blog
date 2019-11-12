const Category = ({ posts,state }) => {
  const str = posts.map(value => {
    if(value.node.frontmatter.categoryKey===state) {
      return value
    }
    else {
      return null
    }
  })
  const results=str.filter(str => str);
  
  return results
}

export default Category
