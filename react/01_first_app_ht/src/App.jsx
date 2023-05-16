import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.svg'
import search from './assets/search-line.svg'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <div className="container">
        <header>
          <div className="left_nav">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="search">
              <input type="text" placeholder="なにをお探しですか？" />
              <img className="search_button" src={search} alt="" />
            </div>
          </div>
          <nav>
            <ul>
              <li><a href="#">お知らせ</a></li>
              <li><a href="#">ログイン</a></li>
              <li><a href="#">会員登録</a></li>
              <div className="post_frame"><a className="post" href="#">出品</a></div>
            </ul>
          </nav>
        </header>
      </div>
     </>
  );
}   
       

export default App
