import { createContext, useState } from "react";

export const authcontext = createContext()

const AuthcontextProvider = ({ children }) => {
    const [auth, setauth] = useState(false)

    return <authcontext.Provider value={{ auth, setauth }}>{children}</authcontext.Provider>
}

export default AuthcontextProvider