import { createContext, useContext, useReducer } from "react";
import { mails } from "../Data/data";

export const MailContext = createContext();

const mailReducer = (state, action) => {
  switch (action.type) {
    case "UNREAD_FILTER":
      return { ...state, unreadMails: !state.unreadMails };
    case "STAR_FILTER":
      return { ...state, starredMails: !state.starredMails };
    case "STAR_TOGGLE":
      return {
        ...state,
        mails: state.mails.map((mail) =>
          mail.mId === action.payload
            ? { ...mail, isStarred: !mail.isStarred }
            : mail
        ),
      };
    case "UNREAD_TOGGLE":
      return {
        ...state,
        mails: state.mails.map((mail) =>
          mail.mId === action.payload ? { ...mail, unread: !mail.unread } : mail
        ),
      };
    case "DELETE":
      return {
        ...state,
        trashedMails: [...state.trashedMails, action.payload],
        mails: state.mails.filter((mail) => mail.mId !== action.payload.mId),
      };
    case "SPAM":
      return {
        ...state,
        spamedMails: [...state.spamedMails, action.payload],
        mails: state.mails.filter((email) => email.mId !== action.payload.mId),
      };
    case "TRASH_RESTORE":
      return {
        ...state,
        mails: [...state.mails, action.payload],
        trashedMails: state.trashedMails.filter(
          (mail) => mail.mId !== action.payload.mId
        ),
      };
    case "SPAM_RESTORE":
      return {
        ...state,
        mails: [...state.mails, action.payload],
        spamedMails: state.spamedMails.filter(
          (mail) => mail.mId !== action.payload.mId
        ),
      };
    default:
      return state;
  }
};

export const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, {
    mails: mails,
    trashedMails: [],
    spamedMails: [],
    unreadMails: false,
    starredMails: false,
  });

  const filteredUnreadMails = state.unreadMails
    ? state.mails.filter(({ unread }) => unread)
    : state.mails;

  const filteredStarredMails = state.starredMails
    ? filteredUnreadMails.filter(({ isStarred }) => isStarred)
    : filteredUnreadMails;

  return (
    <MailContext.Provider value={{ filteredStarredMails, state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};

export const useMails = () => useContext(MailContext);
