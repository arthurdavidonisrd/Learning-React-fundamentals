import UserDetails from './components/UserDetails'
import { useState } from 'react'
import './App.css'

function App() {

  const [users] = useState([
    {id:1, name: "Arthur", age:26, profession: "software developer"},
    {id:2, name: "Pedro", age:21 , profession: "Data Analist"},
    {id:3, name: "Jose", age:34, profession: "Front end developer"},
  ])

  return (
    <>
      <h1>Testando CSS Global no React</h1>

    <h2>Data users</h2>
      {users.map((user) =>(

            <UserDetails name={user.name} profession={user.profession} age={user.age}/>
      ))}

     
    </>
  )
}

export default App
