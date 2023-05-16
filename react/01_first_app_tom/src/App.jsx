import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.svg'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="left-nav">
          <img src={logo} alt="" />
          <input type="text" />
        </div>
      </header>
      <div className="container">
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    </>
  )
}

export default App
