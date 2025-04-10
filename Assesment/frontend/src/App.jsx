import React from 'react'
import Home from './Components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Read from './Components/Read'
import Create from './Components/Create'
import Edit from './Components/Edit'
const App = () => {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/> } /> 
          <Route path="/Read/:id" element={<Read/> } />
          <Route path="/Create" element={<Create/> } />
          <Route path="/Edit/:id" element={<Edit/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App