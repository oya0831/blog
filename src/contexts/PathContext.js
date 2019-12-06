import { createContext } from 'react';

//initialize
const defaultPath = {
  path: "",
}
const PathContext = createContext(defaultPath)
export default PathContext
