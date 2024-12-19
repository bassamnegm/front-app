import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Counter from './components/Counter'
import List from './components/List'
import Items from './components/Items'
// component
// entry point
function App() {
  /// logic
  const [count, setCount] = useState(0)
  // ui 
  return (
    <div className='cls'>
      <Items />
      {/* <Home /> */}
      {/*
      <About />
      <Counter /> */}
      {/* <List /> */}

    </div>
  )
}

export default App
