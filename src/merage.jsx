import React from 'react'
import { createContext ,useState,useEffect} from 'react'
import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ])
  },
})

export const User = createContext()

const Merage = ({children}) => {

  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  return (
   <User.Provider value={{users,setUsers}} >
    {children}
   </User.Provider>
  )
}

export default Merage
