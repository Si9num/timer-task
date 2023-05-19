import { useEffect, useState } from 'react'
import '../styles/mainWin.css'
import timer from './timer'

function MainWin(){
    const [date, setDate] = useState(timer())
    const [ifDeadline, setIfDeadline] = useState(true)
    useEffect(()=>{
        if(ifDeadline){
            setInterval(() => {
                setDate(timer())
            },1000)
            
    } else if(date.days === 0 && date.hours === 0 && date.minutes === 0 && date.seconds === 0 ){
        setIfDeadline(false)
    }
    },[ifDeadline])
    return(
        <div className="mainWin">
            <p className='strongP'> UNDER CONSTRUCTION</p>
            <p className='descrP'>We're making lots of improvements and will be<br />back soon</p>
            <div className="timer">
                <div className='dateContainer'>
                    <p>{date.days}</p>
                    <div className='bgDate'>
                        <p>Days</p>
                    </div>
                </div>
                <p>:</p>
                <div className='dateContainer'>
                    <p>{date.hours}</p>
                    <div className='bgDate'>
                        <p>Hours</p>
                    </div>
                </div>
                <p>:</p>
                <div className='dateContainer'>
                    <p>{date.minutes}</p>
                    <div className='bgDate'>
                        <p>Minutes</p>
                    </div>
                </div>
                <p>:</p>
                <div className='dateContainer'>
                    <p>{date.seconds}</p>
                    <div className='bgDate'>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
            <div>
                <p></p>
                <a></a>
            </div>
        </div>
    )
}
export default MainWin