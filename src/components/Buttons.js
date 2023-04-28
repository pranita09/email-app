import { useMails } from "../contexts/MailContext";

const Buttons = ({mail}) =>{

  const {dispatch} = useMails(); 
  const {mId, isStarred, unread, isSpam} = mail;

  return (
    <>
      <button onClick={()=> dispatch({type: 'star_toggle', payload: mId})}>{isStarred ? 'Unstar' : 'Star'}</button>
      <button onClick={()=> dispatch({ type: 'unread_toggle', payload: mId})}>Mark as {unread ? 'read' : 'unread'}</button>
      <button onClick={()=> dispatch({type: 'delete', payload: mail})}>Delete</button>
      <button onClick={()=> dispatch({ type: 'spam', payload: mail})}>{isSpam ? 'Spam reported' : 'Report spam' }</button>
    </>
  )
}

export default Buttons;