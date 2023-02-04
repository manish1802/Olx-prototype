import axios from "axios";
// import localStorage from "local-storage";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        // JSON.parse(localStorage.getItem("user")) || null
    );
   const login = async (input) => {
        const res = await axios.post("http://localhost:5000/api/auth/login", input)
        // JSON.parse(localStorage.getItem("user"))
        console.log(res)
       setCurrentUser(res.data)
    };

    const logout = async (input) => {
        await axios.post("http://localhost:5000/api/auth/logout")
       
        setCurrentUser(null)
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
       
    }, [currentUser])


    return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>

}