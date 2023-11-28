import { useDispatch } from "react-redux"
import { updateQuote } from "../freatures/quoteSlice"

import {BiSolidRightArrow} from 'react-icons/bi';


export default function NewQuote () {
    const dispatch = useDispatch();
    document.addEventListener("keydown", function(e){
        if(e.key === "Enter") {
            handelClick()
        }
    })

    function handelClick () {
        const rand = Math.round(Math.random()*102)
        dispatch(updateQuote(rand))
    }
    return (
        <div className=" bg-slate-700 px-2 pt-2 rounded-xl hover:bg-slate-950 hover:text-blue-500 ml-auto">
        <button  onClick={handelClick} id="new-quote"><BiSolidRightArrow size={30}/></button>
        </div>
    )
}