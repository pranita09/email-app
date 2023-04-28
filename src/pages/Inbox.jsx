import MailCard from "../components/MailCard";
import { useMails } from "../contexts/MailContext";

const Inbox = () => {
  const { filteredStarredMails, dispatch } = useMails();

  return (
    <>
      <h2>Inbox</h2>
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "unread_filter" })}
          />
          Show unread mails
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "star_filter" })}
          />
          Show starred mails
        </label>
      </fieldset>
      <ul>
        {filteredStarredMails.map((mail) => (
          <MailCard key={mail.mId} mail={mail} />
        ))}
      </ul>
    </>
  );
};

export default Inbox;
