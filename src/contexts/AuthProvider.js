import {  createContext } from "react"
import UseFirebase from "../hooks/UseFirebase";
import useService from "../hooks/useService";

export const AuthContext= createContext();


const AuthProvider = ({children}) => {
    const AllContexts= UseFirebase();
    const { services }=useService();

    const data = {AllContexts,services}

        return (
            <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
        )
}

export default AuthProvider
