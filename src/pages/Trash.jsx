import MailCard from "../components/MailCard";
import { useMails } from "../contexts/MailContext";

const Trash = () => {
  const { state } = useMails();

  return (
    <>
      <h2>Trash</h2>
      {state.trashedMails.length > 0 ? (
        state.trashedMails.map((mail) => {
          return <MailCard key={mail.mId} mail={mail} trashAdded />;
        })
      ) : (
        <h3>Trash is empty!</h3>
      )}
    </>
  );
};

export default Trash;
