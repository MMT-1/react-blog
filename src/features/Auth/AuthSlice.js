const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}


export const signInUser = createAsyncThunk('signInUser', async (body) => {
    const res = await fetch('http://localhost:3005/users', {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    });
    return await res.json();
})


export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
    const res = await fetch('http://localhost:3005/users', {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    });
    return await res.json();
})


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken:(state, action)=>{
            state.token = localStorage.getItem("token")
        },
        addUser:(state, action)=>{
            state.user = localStorage.getItem("user")
        },
        logout:(state, action)=>{
            state.token = null
            localStorage.clear()
        }
    },
    extraReducers: {
        [signUpUser.pending]: (state, action) => {
            state.loading = true

        },
        [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false;
            if (error) {
                state.error = error
            } else {
                state.msg = msg
            }

        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true

        },
        // ************************
        [signInUser.pending]: (state, action) => {
            state.loading = true

        },
        [signInUser.fulfilled]: (state, { payload: { error, msg,token,user } }) => {
            state.loading = false;
            if (error) {
                state.error = error
            } else {
                state.msg = msg
                state.token = token
                state.user = user

                localStorage.setItem('msg', msg)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
            }

        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true

        }

    }
}

)

export default AuthSlice.reducer
export const {addToken,addUser,logout } = AuthSlice.actions 