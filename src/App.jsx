import Author from './components/Author'
import NewQuote from './components/NewQuote'
import Text  from './components/Text'
import TweetQuotes from "./components/TweetQuote"
function App() {
  return (
    <>
      <div className='flex bg-slate-800 h-screen justify-center items-center'>
        <div className='w-[400px] md:w-[500px] bg-slate-950 border-blue-500 border-4 p-5 md:p-10 rounded-xl flex flex-col m-5' id="quote-box">
        <div className='flex flex-col'>
          <Text />
          <Author />
        </div>
        <div className='flex flex-row mt-5 md:mt-10'>
          <TweetQuotes />
          <NewQuote /> 
        </div>
        
        </div>
      </div>
    </>
  )
}

export default App
