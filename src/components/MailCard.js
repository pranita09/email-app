import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MailContext } from "..";
import Buttons from "./Buttons";

const MailCard = ({ email, individualPage, isAddedToSpam, isAddedToTrash, clicked }) => {
  const { dispatch } = useContext(MailContext);
  const { mId, unread, isStarred, subject, content, isSpam } = email;
  return (
    <div key={mId}>
      <div>
        <h4>Subject: {subject}</h4>  
      </div>
      <p>{content}</p>
      {!individualPage && (
        <small>
          <NavLink to={`/email/${mId}`}>View Details</NavLink>
        </small>
      )}
      { !isAddedToSpam  &&  <Buttons email={email} isStarred={isStarred} clicked={clicked} unread={unread} isSpam={isSpam} />}
    </div>
  );
};

export default MailCard;
