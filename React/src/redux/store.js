import { createStore } from 'redux'
import { textReducer } from "./reducer"
export const store =createStore(textReducer)