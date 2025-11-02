import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Explore from './Explore'
import CreatePost from './CreatePost'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  )
}

export default App