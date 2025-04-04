import Create from './Components/Create'
import Home  from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './Components/Update'
import Read from './Components/Read'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Create' element={<Create/>}></Route>
          <Route path='/Update/:id' element={<Update/>}></Route>
          <Route path='/Read/:id' element={<Read/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
