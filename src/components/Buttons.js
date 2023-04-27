import { useMails } from "../contexts/MailContext";

const Buttons = ({mId, isStarred}) =>{

  const {dispatch} = useMails(); 

  return (
    <>
      <button onClick={()=> dispatch({type: 'star_toggle', payload: mId})}>{isStarred ? 'Unstar' : 'Star'}</button>
    </>
  )
}

export default Buttons;