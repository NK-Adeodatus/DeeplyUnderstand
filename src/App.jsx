import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import SignIn from './SignIn'
import SignUp from './SignUp'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App