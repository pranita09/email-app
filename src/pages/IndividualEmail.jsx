import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MailContext } from "..";
import MailCard from "../components/MailCard";

const IndividualEmail = () => {
  const { emailmId } = useParams();
  const { state } = useContext(MailContext);

  const emailToOpen = state.mailsData.find((email) => email.mId === emailmId);

  console.log(emailmId);
  return (
    <>
      <h2>Individual Email</h2>
      <MailCard email={emailToOpen} individualPage clicked={true} />
    </>
  );
};

export default IndividualEmail;
