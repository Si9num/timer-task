import { useState } from 'react'
import '../../styles/card.css'


function Card(props){
    

    const open = ()=>{
       let newArr = [...props.width]
       for(let i = 0; i< newArr.length; i++){
        if(i === props.id){
            newArr[i]='40%'
        }else{
            newArr[i]='3%'
        }
       }
       console.log(props.id)
       
       props.onChangeWidth(newArr)
    }
    return(
        <div style={{width:props.width[props.id] , overflow:'hidden', transition:'0.3s'}}>
        <div className='card' style={{backgroundImage:`url(${props.img})`}}>
            <div className='cardName' onClick={open}>
                <p>{props.name}</p>
                <p>{props.num}</p>
            </div>
            <div className='cardDesc'>
                <p>{props.name}</p>
                <p>{props.date}</p>
                <button>More information</button>
            </div>
        </div>
        </div>
    )
}
export default Card