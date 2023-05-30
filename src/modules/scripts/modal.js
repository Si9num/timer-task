import { useEffect, useState } from 'react'
import '../styles/modal.css'

function Modal(props){
    
    return(
        <div className='wrap' style={{visibility:props.visibility}}>
            <div className='modal'>
                <p>{props.h}</p>
                <p>{props.p}</p>
                <button onClick={()=>{props.onChangeModal('hidden')}}>Close</button>
 
                <div className='cross' onClick={()=>{props.onChangeModal('hidden')}}></div>
            </div>
        </div>
    )
}
export default Modal