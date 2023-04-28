import { useParams } from "react-router-dom";
import { useMails } from "../contexts/MailContext";

const IndividualMail = () => {
  const { emailmId } = useParams();
  const { state } = useMails();

  const selectedMail = state.mails.find((mail) => mail.mId === emailmId);

  return (
    <>
      <div className="mailcard">
        <h3>Subject: {selectedMail.subject}</h3>
        <p>{selectedMail.content}</p>
      </div>
    </>
  );
};

export default IndividualMail;
