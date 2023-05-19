import { createSlice } from "@reduxjs/toolkit";

const initialGlobalVariables = {
    sidebar: false,
}

const GlobalVariables = createSlice({
    name: 'GlobalVariables',
    initialState: initialGlobalVariables,
    reducers: {
        changeSidebar(state, action) {
            state.sidebar = action.payload
        }
    }
})

export const GlobalVariablesAction = GlobalVariables.actions

export default GlobalVariables.reducer