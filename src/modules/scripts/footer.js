import { useEffect, useState } from 'react';
import '../styles/footer.css'
import subBtn from './subBtn';
import Modal from './modal';

function Footer(){
    const [value, setValue] = useState('')
    const [modal,setModal] =useState('hidden')
    const [data,setData]= useState({h:"SUCCESS!",p:`You have successfully subscribed to the email newsletter`})
 
    
    const changeModal = (state)=>{
        setModal(state)
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        console.log(data)
      };
     
    return(
        <div className='footer'>
            <Modal visibility={modal} h={data.h} p={data.p} onChangeModal = {changeModal} />
            <form onSubmit={handleSubmit} className='evForm' > 
            <input className='emailInput' 
            type='email' 
            placeholder='Enter your Email and get notified' 
            required 
            value={value} 
            onChange={(ev)=>{setValue(ev.target.value)}}></input>
            <button  className='btnEmail' onClick={()=>{subBtn(); setData(JSON.parse(sessionStorage.getItem('res')));
                setModal("visible");
                }}></button>
            </form>
        </div>
    )
}
export default Footer