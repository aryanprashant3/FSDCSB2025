import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile.jsx'
import ImageManipulation from './component/ImageManipulation.jsx'

function App() 
{
  const [count, setCount] = useState(0)

  return(
    
    <div className="container">
      <h2>Welcome to React vite</h2>
      {/* <Profile /> */}
    
    <ImageManipulation />
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}>
      </Route>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App  