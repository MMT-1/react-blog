import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/Posts/postsSlice'
import authReducer from '../features/Auth/AuthSlice'

export const store = configureStore({
  reducer: {
    post: postsReducer,
    auth: authReducer
  },
})
