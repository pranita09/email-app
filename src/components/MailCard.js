import { NavLink } from "react-router-dom";
import Buttons from "./Buttons";

const MailCard = ({mail}) =>{

  const {mId, unread, isStarred, subject, content} = mail;

  return(
    <div className='mailcard'>
      <h3>Subject: {subject}</h3>
      <p>{content}</p>
      <p><NavLink>View details</NavLink></p>
      <Buttons />
    </div>
  )
}

export default MailCard;