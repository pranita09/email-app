import { useMails } from "../contexts/MailContext";

const Buttons = ({mId, isStarred, unread}) =>{

  const {dispatch} = useMails(); 

  return (
    <>
      <button onClick={()=> dispatch({type: 'star_toggle', payload: mId})}>{isStarred ? 'Unstar' : 'Star'}</button>
      <button onClick={()=> dispatch({ type: 'unread_toggle', payload: mId})}>Mark as {unread ? 'read' : 'unread'}</button>
    </>
  )
}

export default Buttons;