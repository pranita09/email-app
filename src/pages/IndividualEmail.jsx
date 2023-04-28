import { useParams } from "react-router-dom";
import { useMails } from "../contexts/MailContext";

const IndividualMail = () => {
  const { emailmId } = useParams();
  const {
    state: { mails, trashedMails, spamedMails },
  } = useMails();

  const mainMail = mails.find((mail) => mail.mId === emailmId);
  const trashMail = trashedMails.find((mail) => mail.mId === emailmId);
  const spamMail = spamedMails.find((mail) => mail.mId === emailmId);

  const selectedMail = mainMail ?? spamMail ?? trashMail;

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
