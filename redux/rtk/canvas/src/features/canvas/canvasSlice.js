import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: {
        code: '#000000'
    },
    font: {
        size: 16
    }
};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    //reducers is an object where you will be defining actions 
    reducers: {
        changeColor : (state, action) => {
            state.color.code = action.payload;
        },
        changeFont : (state, action) => {
            state.font.size = action.payload;
        },
    }
});

///selector normal js function (getters) which will return current state at any time.
export const selectColor = state => state.canvas.color.code;
export const selectFont = state => state.canvas.font.size;

export const {changeColor, changeFont} = canvasSlice.actions;

export default canvasSlice.reducer;