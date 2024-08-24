import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    products:[],
}
export const fetchData=createAsyncThunk("product/fetch",async()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    return response.data
})

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        filterProducts: (state, action) => {
            state.products = state.products.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()));
          }
    },
    extraReducers:(bulder)=>{
        bulder.addCase(fetchData.pending,(state,action)=>{
            state.loading=true
        })
        bulder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        bulder.addCase(fetchData.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
            state.products=[]
        })
    }
})

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;