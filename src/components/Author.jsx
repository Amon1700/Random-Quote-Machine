import { useSelector } from "react-redux"

export default function Author() {
    const author = useSelector(state => state.quoteauthor.author)
    
    return (
      <div id="author"> 
        <h1 className=" text-blue-500 mt-0 md:mt-5 text-sm md:text-xl ">{author}</h1>
      </div>
    );
  }