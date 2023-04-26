import { createContext, useContext, useReducer } from "react";
import { mails } from "../Data/data";

export const MailContext = createContext();

const mailReducer = (state, action) =>{
  switch(action.type){
    case 'unread_filter':
      console.log(state.unreadMails);
      return {...state, unreadMails: !state.unreadMails};
    case 'star_filter':
      return { ...state, starredMails: !state.starredMails };
    default:
      return state;
  }
}

export const MailProvider = ({children}) =>{

  const [state, dispatch] = useReducer(mailReducer, {mails: mails, unreadMails: false, starredMails: false})

  const mailsData = [...mails];
  let filteredUnreadMails;
  let filteredStarredMails;

  if(state.unreadMails){
    filteredUnreadMails = mailsData.filter(({unread})=> unread);
  }else{
    filteredUnreadMails = mailsData;
  }
  if(state.starredMails){
    filteredStarredMails = filteredUnreadMails.filter(({isStarred})=> isStarred)
  }else{
    filteredStarredMails = filteredUnreadMails;
  }
 

  return(
    <MailContext.Provider value={{ filteredStarredMails, state, dispatch }}>
      {children}
    </MailContext.Provider>
  )
}

export const useMails = () => useContext(MailContext);