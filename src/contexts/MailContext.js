import { createContext, useContext } from "react";

export const MailContext = createContext();

export const MailProvider = ({children}) =>{
  return(
    <MailContext.Provider value={{}}>
      {children}
    </MailContext.Provider>
  )
}

export const useMails = () => useContext(MailContext);