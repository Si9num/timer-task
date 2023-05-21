import { useState } from 'react';
import '../styles/footer.css'
import subBtn from './tools/subBtn';
import Modal from './modal';

function Footer(props){
    const [value, setValue] = useState('')
    const [modal,setModal] =useState('hidden')
    const [data,setData]= useState('')
    const [isDisabled,setIsDisabled] = useState(true)
 

    const checkEmail =(ev)=>{
        setValue(ev.target.value);
        const regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        if(!regExp.test(ev.target.value)){
            setIsDisabled(true)
        }else{
            setIsDisabled(false)
        }
    }
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
            onChange={checkEmail}></input>
            <button disabled={isDisabled} className='btnEmail' onClick={()=>{subBtn();
            setTimeout(()=>{setData(JSON.parse(sessionStorage.getItem('res')));setModal("visible");},500) ;
                
                }}></button>
            </form>
            <button className='othEvBtn' onClick={()=>{props.onSetDisplay('flex')}}>Other Events</button>
        </div>
    )
}
export default Footer