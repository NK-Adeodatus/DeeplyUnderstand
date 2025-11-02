import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Explore from './Explore'
import CreatePost from './CreatePost'
import Category from './Category'
import Contributors from './Contributors'

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
        <Route path="/web-dev" element={<Category categoryName="Web Development" />} />
        <Route path="/languages" element={<Category categoryName="Programming Languages" />} />
        <Route path="/databases" element={<Category categoryName="Databases" />} />
        <Route path="/frameworks" element={<Category categoryName="Frameworks & Libraries" />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
    </>
  )
}

export default App