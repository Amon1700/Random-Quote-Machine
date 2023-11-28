import { useSelector } from "react-redux"
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from 'react-icons/bi';

export default function Text(){
    const quote = useSelector(state => state.quoteauthor.quote)

    return (
        <div id="text">
            <h1 className=" text-blue-400 text-sm md:text-xl ">
            <BiSolidQuoteAltLeft style={{color : "#3b82f6"}}/>
            {quote}
            <BiSolidQuoteAltRight className="ml-auto" style={{color : "#3b82f6"}}/>
            </h1>
        </div>
    )
} 