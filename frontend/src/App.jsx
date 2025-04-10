import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Navbar from './Components/navbar'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <div className='pages'>
      <Routes>
        <Route
        path='/'
        element={<Home/>}/>
      </Routes>
     </div>
    </BrowserRouter>
    </>
  )
} 

export default App
