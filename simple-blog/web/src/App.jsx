import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GraphqlDemo1 from './components/GraphqlDemo1'
import RecentPostList from './components/RecentPostList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <hr/>
        <h1>React App</h1>
        <hr/>
        {/* <GraphqlDemo1 /> */}
        <RecentPostList />
      </div>
    </div>
  )
}

export default App
