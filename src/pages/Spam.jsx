import MailCard from "../components/MailCard";
import { useMails } from "../contexts/MailContext";

const Spam = () => {
  const { state } = useMails();

  return (
    <>
      <h2>Spam</h2>
      {state.spamedMails.length > 0 ? (
        state.spamedMails.map((mail) => (
          <MailCard key={mail.mId} mail={mail} spamAdded />
        ))
      ) : (
        <h3>Spam is empty!!</h3>
      )}
    </>
  );
};

export default Spam;
