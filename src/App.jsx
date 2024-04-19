import Pokedex from './components/pokedex/pokedex'
import "./App.css"
import Customsroutes from './components/routes/customsrouts'
import { Link } from 'react-router-dom'
import "./App.css"

function App() {

  return (
    <div className='outer-pokedex'>
      <h1 id='pokedex-heading'>
        <Link to="/">Pokedex</Link>
      </h1>
      <Customsroutes/>
    </div>
  )
}

export default App
