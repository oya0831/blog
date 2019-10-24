const NewArticles = ({ posts }) => {

  let ham=0,owner=0,story=0;
  const str = posts.map( function( value ) {
    switch(value.node.frontmatter.categoryKey) {
      case "ham": 
        if(ham===0) {
          ham++
          return value
        }
        break;
      case "owner":
        if(owner===0) {
          owner++
          return value
        }
        break;
      default:
        if(story===0) {
          story++
          return value
        }
    }
  });
  const results=str.filter(str => str);

  return results
}

export default NewArticles
