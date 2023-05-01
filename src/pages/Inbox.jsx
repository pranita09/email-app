import MailCard from "../components/MailCard";
import { useMails } from "../contexts/MailContext";

const Inbox = () => {
  const { filteredStarredMails, dispatch } = useMails();

  const totalUnreadMails = filteredStarredMails.reduce((acc, {unread})=> unread ? acc+1 : acc, 0);

  return (
    <div className="routes">
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "UNREAD_FILTER" })}
          />
          Show unread mails
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "STAR_FILTER" })}
          />
          Show starred mails
        </label>
      </fieldset>
      <h3>Unread: {totalUnreadMails}</h3>
      <ul>
        {filteredStarredMails.map((mail) => (
          <MailCard key={mail.mId} mail={mail} />
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
