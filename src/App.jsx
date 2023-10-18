import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserApp from './pages/UserApp'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import UpdateUser from './pages/UpdateUser'
import DeleteUser from './pages/DeleteUser'
import ErrorHandling from './pages/ErrorHandling'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/users' element={<Users />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/update' element={<UpdateUser />} />
          <Route path='/delete' element={<DeleteUser />} />
          <Route path='*' element={<ErrorHandling />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
