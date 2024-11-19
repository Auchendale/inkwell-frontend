"use client"
import { useState } from "react"
const users = require('../../data/users-data')

export default function LogIn() {
    const [usersData, setUsersData] = useState(users)
    return(
        <>
        <h1>Log In</h1>
        <div className="grid grid-cols-3 gap-1 justify-evenly">
        {usersData.map((user) => {
            return <div className="m-5">
                <img className="max-h-28 size-28 rounded-full " src={user.user_icon_url} alt="" /> 
                <p>{user.username}</p>                
                <p>{user.email}</p>
            </div>
        })}
        </div>
        </>

    )
}