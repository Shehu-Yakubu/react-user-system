import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserApp from './pages/UserApp'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import UpdateUser from './pages/UpdateUser'
import DeleteUser from './pages/DeleteUser'
import ErrorHandling from './pages/ErrorHandling'

import './App.css'

function App() {
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/data', {
  //         headers: {
  //           Authorization: 'Token' // Bearer token goes here
  //         }
  //       })

  //       if (!response.ok) {
  //         throw new Error('API Request Failed')
  //       }

  //       const jsonData = await response.json()
  //       setData(jsonData)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      {/* <h1>Shehu GitHub Repos</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <ul>
          { data.map( item => (
              <li key={item.id}>
                {item.name}
              </li>
            ))
          }
        </ul>
      ) : (
        <p>Loading data...</p>
      )} */}
      {/* <Users /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<UserApp />} />
          <Route path='/users' element={<Users />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/update' element={<UpdateUser />} />
          <Route path='/delete' element={<DeleteUser />} />
          <Route path='*' element={<ErrorHandling />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
