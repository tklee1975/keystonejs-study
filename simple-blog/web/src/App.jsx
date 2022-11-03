import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GraphqlDemo1 from './components/GraphqlDemo1'
import RecentPostList from './components/RecentPostList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from './components/AllPosts'
import OnePost from './components/OnePost'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<AllPosts/>} path="/" />
          <Route element={<OnePost/>} path="/post/:slug" />
        </Routes>
      </div>
    </BrowserRouter>
  )

  // return (
  //   <div className="App">
  //     <div>

  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //       <hr/>
  //       <h1>React App</h1>
  //       <hr/>
  //       {/* <GraphqlDemo1 /> */}
  //       <RecentPostList />
  //     </div>
  //   </div>
  // )
}

export default App
