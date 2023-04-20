import { useContext } from "react";
import { MailContext } from "..";
import MailCard from "../components/MailCard";

const Spam = () => {
  const { state } = useContext(MailContext);
  return (
    <>
      <h2>Spam</h2>
      {state.spamMails.map((email) => (
          <MailCard key={email.mId} email={email} isAddedToSpam/>
      ))}
    </>
  );
};

export default Spam;
