import { createSlice } from "@reduxjs/toolkit";
import all from "./Quotes"

const rand = Math.round(Math.random()*102)

// let idx = 0
// let maxlength = 0
// for(let i = 0 ; i < all.quotes.length; i++) {
//     if(maxlength < all.quotes[i].quote.length ) {
//         maxlength = all.quotes[i].quote.length 
//         idx = i
//     }
// }
const initialState = {
    quoteauthor : {
        quote : all.quotes[rand].quote,
        author : all.quotes[rand].author
    }
}   

export const quoteSlice = createSlice({
    name : "quote",
    initialState,
    reducers : {
        updateQuote : (state, action) => {   
            const newQuote = {
                quote  : all.quotes[action.payload].quote,
                author : all.quotes[action.payload].author
            }
            state.quoteauthor = newQuote
        }
    }
})

export const {updateQuote} = quoteSlice.actions

export default quoteSlice.reducer