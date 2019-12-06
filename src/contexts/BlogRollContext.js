import { createContext } from 'react';

//initialize
const defaultState = {
  categoriesPosts: "",
}
const BlogRollContext = createContext(defaultState)
export default BlogRollContext
