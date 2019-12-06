import { createContext } from 'react';

//initialize
const defaultState = {
  path: "",
  data: "",
  categoriesPosts: "",
}
const BlogRollContext = createContext(defaultState)
export default BlogRollContext
