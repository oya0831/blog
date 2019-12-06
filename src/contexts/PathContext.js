import { createContext } from 'react';

//initialize
const defaultState = {
  path: "",
}
const PathContext = createContext(defaultState)
export default PathContext
