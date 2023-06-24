import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


export const getPosts = createAsyncThunk('post/getPosts', async (_, ThunkAPI) => {
    try {
        const res = await fetch('http://localhost:3005/articles');
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error)
    }
})
export const getPostsDetails = createAsyncThunk('post/getPostsDetails', async (id, ThunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3005/articles/${id}`);
        const data = await res.json();

        return data;

    } catch (error) {
        console.log(error)
    }
})

export const postsSlice = createSlice(
    {
        name: "post",
        initialState: {
            posts : [],
            postsDetail: []
        },
        extraReducers:{
            [getPosts.fulfilled]: (state, action)=>{
                state.posts = action.payload
                
            },
            [getPostsDetails.fulfilled]: (state, action)=>{
                state.postsDetail = action.payload
                
            }
        }
    }
)
export default postsSlice.reducer