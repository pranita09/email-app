import { NavLink } from "react-router-dom";
import Buttons from "./Buttons";
import { useMails } from "../contexts/MailContext";

const MailCard = ({mail, trashAdded, spamAdded}) =>{

  const {state, dispatch} = useMails();
  const {mId, unread, isStarred, subject, content} = mail;

  return(
    <div className='mailcard'>
      <h3>Subject: {subject}</h3>
      <p>{content}</p>
      <p><NavLink>View details</NavLink></p>
      {(!trashAdded && !spamAdded )&& <Buttons mail={mail} />}
    </div>
  )
}

export default MailCard;