import { createContext } from "react";

type AppContextType = {
    currentTab:number,
    setCurrentTab:(currentTab:number) => void
}

const initialContext: AppContextType = {
    currentTab:1,
    setCurrentTab:() => {}
}
const AppContext = createContext(initialContext)

export default AppContext;