import { useEffect, useState } from 'react'
import '../styles/modal.css'

function Modal(props){
    const [visible,setVisible]= useState(props.visibility)
    useEffect(()=>{
        setVisible(props.visibility)
    },[props.visibility])
    return(
        <div className='wrap' style={{visibility:visible}}>
            <div className='modal'>
                <p>{props.h}</p>
                <p>{props.p}</p>
                <button onClick={()=>{setVisible('hidden');props.onChangeModal('hidden')}}>Close</button>
 
                <div className='cross' onClick={()=>{setVisible('hidden');props.onChangeModal('hidden')}}></div>
            </div>
        </div>
    )
}
export default Modal