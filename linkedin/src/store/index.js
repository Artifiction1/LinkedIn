import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './reducers/index.js'

const store = configureStore({ reducer: mainReducer })

export default store