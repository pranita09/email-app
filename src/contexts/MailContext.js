import { createContext, useReducer } from "react";
import { mails } from "../Data/data";

export const MailContext = createContext();

const mailReducer = (state, action) => {
  switch (action.type) {
    case "delete_mail":
      return {
        ...state,
        trashMails: [...state.trashMails, action.payload],
        mailsData: state.mailsData.filter(
          (email) => email.mId !== action.payload.mId
        )
      };
    case "read_unread_toggle":
      return {
        ...state,
        mailsData: state.mailsData.map((email) =>
          email.mId === action.payload.mId
            ? { ...email, unread: !email.unread }
            : email
        )
      };
    case "report_spam":
      return {
        ...state,
        spamMails: [...state.spamMails, action.payload],
        mailsData: state.mailsData.filter((email) =>
          email.mId === action.payload.mId
            ? { ...email, isSpam: (email.isSpam = true) }
            : email
        )
      };
    case "star_unstar_toggle":
      return {
        ...state,
        mailsData: state.mailsData.map((email) =>
          email.mId === action.payload.mId
            ? { ...email, isStarred: !email.isStarred }
            : email
        )
      };
    case "unread_filter":
      return { ...state, isUnreadMails: !state.isUnreadMails };
    case "starred_filter":
      return { ...state, isStarredMails: !state.isStarredMails };
    default:
      return state;
  }
};

export const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, {
    mailsData: mails,
    trashMails: [],
    spamMails: [],
    isUnreadMails: false,
    isStarredMails: false
  });
  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};
