import { useContext } from "react";
import MailCard from "../components/MailCard";
import { MailContext } from "../contexts/MailContext";

const Trash = () => {
  const { state } = useContext(MailContext);
  return (
    <>
      <h2>Trash</h2>
      <div>
        {state.trashMails.map((mail) => (
            <MailCard key={mail.mId} email={mail} isAddedToTrash/>
        ))}
      </div>
    </>
  );
};

export default Trash;
