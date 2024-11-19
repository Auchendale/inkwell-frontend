"use client"
import { useState, useContext } from "react"
const users = require('../../data/users-data')
import CurrentUserContext from "@/contexts/user-context"


export default function LogIn() {
    const [usersData, setUsersData] = useState(users)
    const { setCurrentUser} = useContext(CurrentUserContext);

console.log(setCurrentUser)
    return(
        <>
        <h1>Log In</h1>
        <div className="grid grid-cols-3 gap-1 justify-evenly">
        {usersData.map((user: {username: string, email: string, user_icon_url?: string, friends: string[], location: {country: string, lat: number, long: number}}) => {
            return <div className="m-5" onClick={setCurrentUser(user.username)} key={user.username} >
                <img className="max-h-28 size-28 rounded-full " src={user.user_icon_url} alt="" /> 
                <p>{user.username}</p>                
            </div>
        })}
        </div>
        </>

    )
}