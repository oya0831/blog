const NewPosts = ({ posts }) => {
  let ham=0, owner=0, story=0;
  const str = posts.map(value => {
    switch (value.node.frontmatter.dayKey) {
      case "ham" : 
        if (ham===0) {
          ham++;
          return value;
        }
        return null
      case "owner" :
        if (owner===0) {
          owner++;
          return value;
        }
        return null
      default :
        if (story===0) {
          story++;
          return value;
        }
        return null;
    }
  })
  const results=str.filter(str => str);

  return results;
}

export default NewPosts
