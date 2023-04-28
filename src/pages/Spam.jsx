import MailCard from "../components/MailCard";
import { useMails } from "../contexts/MailContext";

const Spam = () =>{

  const {state} = useMails();

  return(
    <>
      <h2>Spam</h2>
      {
        state.spamedMails.map((mail)=>(
          <MailCard key={mail.mId} mail={mail} spamAdded/>
        ))
      }
    </>
  )
}

export default Spam;