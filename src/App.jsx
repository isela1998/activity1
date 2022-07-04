import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import NextButton from './components/NextButton'
import colors from './colors.json'
import quotes from './quotes.json'
import './style.css';

function App() {

  const firstQuote = Math.floor(Math.random() * quotes.length)
  const [ramdomQuote, setRamdomQuote] = useState(firstQuote)
  
  const nextQuote = () => {
    const newQuote = Math.floor(Math.random() * quotes.length)
    setRamdomQuote(newQuote)
  }
  
  const ramdomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[ramdomColor]}`;
  
  return (
    <div className='card'>
      <QuoteBox textColor={colors[ramdomColor]} quote={quotes[ramdomQuote].quote} author={quotes[ramdomQuote].author}/>
      <NextButton textColor={colors[ramdomColor]} changeQuote={nextQuote} />
    </div>
  )
}
export default App