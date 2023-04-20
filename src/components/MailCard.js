import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MailContext } from "..";

const MailCard = ({ email, individualPage }) => {
  const { dispatch } = useContext(MailContext);
  const { mId, unread, isStarred, subject, content, isSpam } = email;
  return (
    <div>
      <div>
        <h4>Subject: {subject}</h4>
        <button
          onClick={() =>
            dispatch({ type: "star_unstar_toggle", payload: email })
          }
        >
          {isStarred ? "Unstar" : "Star"}
        </button>
      </div>
      <p>{content}</p>
      {!individualPage && (
        <small>
          <NavLink to={`/email/${mId}`}>View Details</NavLink>
        </small>
      )}
      <div>
        <button
          onClick={() => dispatch({ type: "delete_mail", payload: email })}
        >
          Delete
        </button>
        <button
          onClick={() =>
            dispatch({ type: "read_unread_toggle", payload: email })
          }
        >
          Mark as {unread ? "Read" : "Unread"}
        </button>
        <button
          onClick={() => dispatch({ type: "report_spam", payload: email })}
        >
          {isSpam ? "Spam reported" : "Report spam"}
        </button>
      </div>
    </div>
  );
};

export default MailCard;
