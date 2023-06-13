// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Board from './Board'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Board />
    </div>
  )
}

export default App
