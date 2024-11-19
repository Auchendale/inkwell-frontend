"use client"
import { useState, createContext, Dispatch, SetStateAction } from "react"

interface UserContextType{
    currentUser: string
    setCurrentUser: Dispatch<SetStateAction<string>>
}

const CurrentUserContext = createContext<UserContextType | null>(null);

export default CurrentUserContext