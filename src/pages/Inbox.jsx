import { useContext } from "react";
import { MailContext } from "..";
import MailCard from "../components/MailCard";

const Inbox = () => {
  const { state, dispatch } = useContext(MailContext);

  const unReadCount = state.mailsData.reduce(
    (acc, { unread }) => (unread ? acc + 1 : acc),
    0
  );

  const starredMailsCount = state.mailsData.reduce(
    (acc, { isStarred }) => (isStarred ? acc + 1 : acc),
    0
  );

  let processedData1;
  let processedData = state.mailsData;

  if (state.isUnreadMails) {
    processedData1 = processedData.filter((email) => email.unread === true);
    // console.log("if unread", processedData1);
  } else {
    processedData1 = state.mailsData;
    // console.log("else unread", processedData1);
  }
  if (state.isStarredMails) {
    processedData = processedData1.filter((email) => email.isStarred === true);
    // console.log("if star", processedData);
  } else {
    processedData = processedData1;
    // console.log("else star", processedData);
  }

  return (
    <>
      <h2>Inbox</h2>
      <div>
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
            onChange={() => dispatch({ type: "starred_filter" })}
          />
          Show starred mails
        </label>
      </div>
      <h3>Unread: {unReadCount}</h3>
      <h3>Star: {starredMailsCount}</h3>
      <div>
        {processedData.map((email) => (
            <MailCard key={email.mId} email={email} clicked={false} />
        ))}
      </div>
    </>
  );
};

export default Inbox;
