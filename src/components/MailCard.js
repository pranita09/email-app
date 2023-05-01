import { NavLink } from "react-router-dom";
import { useMails } from "../contexts/MailContext";

const MailCard = ({ mail, trashAdded, spamAdded }) => {
  const { mId, unread, isStarred, subject, content, isSpam } = mail;
  const {dispatch} = useMails();
  return (
    <>
    <li>
    <div className="space-between">
      <h3>Subject: {subject}</h3>
      <span>
      { !trashAdded && !spamAdded && <button onClick={() => dispatch({ type: "star_toggle", payload: mId })}>
        {isStarred ? "Unstar" : "Star"}
      </button> }
      </span>
      </div>
      <p>{content}</p>
      <div className="space-between">
        <NavLink className='navlink' to={`/email/${mId}`}>View details</NavLink>
        <div className="end-buttons">
          {
            !trashAdded && !spamAdded &&
            (<>
              <button style={{color: 'red'}} onClick={() => dispatch({ type: "delete", payload: mail })}>
              Delete
              </button>
              <button style={{ color: "orangered" }} onClick={() => dispatch({ type: "unread_toggle", payload: mId })}>
                Mark as {unread ? "read" : "unread"}
              </button>
              <button style={{ color: "green" }} onClick={() => dispatch({ type: "spam", payload: mail })}>
                {isSpam ? "Spam reported" : "Report spam"}
              </button>
            </>
            )
          }
          {
            trashAdded && (
              <button style={{color: 'green'}} onClick={()=> dispatch({type: 'TRASH_RESTORE', payload: mail})}>Restore</button>
            )
          }
          {
            spamAdded && (
              <button style={{color: 'green'}} onClick={()=> dispatch({type: 'SPAM_RESTORE', payload: mail})}>Remove from Spam</button>
            )
          }
        </div>
      </div>
    </li>
    </>
  );
};

export default MailCard;
