import { createContext, useState } from "react";

export const taskcontext = createContext()

const Taskcontextprovider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    return <taskcontext.Provider value={{ tasks, setTasks }}>
        {children}
    </taskcontext.Provider>
}

export default Taskcontextprovider
