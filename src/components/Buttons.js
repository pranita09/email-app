import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MailContext } from "..";

const Buttons = ({email, isStarred, clicked, unread, isSpam}) =>{
    const {dispatch} = useContext(MailContext);
    const navigate = useNavigate();
    return(
        <div>
        <button
          onClick={() =>
            dispatch({ type: "star_unstar_toggle", payload: email })
          }
        >
          {isStarred ? "Unstar" : "Star"}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "delete_mail", payload: email} );
            clicked ? navigate('/'): '';
                }
            }
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
    )
}

export default Buttons;