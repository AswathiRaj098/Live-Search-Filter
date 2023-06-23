import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"


const Fetch = () => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUser(res.data))
    }, [])

  return (
    <div align="center">
        <h1 style={{color:"Red"}}>Live Search Filter</h1>
        <label>Search:</label>
        <input type='text' placeholder='Enter the Name ..' value={name}
        onChange={e => setName(e.target.value)}
        /><br/><br/>
        <b><label style={{color: "blue"}}>Filtered Names to be Displayed </label></b>
        {name.length > 0 &&
         user.map((e,i) => (
            <div key={i}>
                 {e.name.toLowerCase().includes(name.toLowerCase()) ? e.name : "" }
            </div>
        ))} 
       
    </div>
  )
}

export default Fetch;