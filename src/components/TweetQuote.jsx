import { BiLogoTwitter} from 'react-icons/bi';


export default function NewQuote () {
    return (
        <div className=" bg-slate-700 px-2 pt-2 rounded-xl hover:bg-slate-950 hover:text-blue-500">
        <a id="tweet-quote"  href="https://twitter.com/intent/tweet" ><BiLogoTwitter size={30}/></a>
        </div>
    )
}