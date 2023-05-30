import { useEffect, useState } from 'react'
import '../styles/mainWin.css'
import timer from './tools/timer'

function MainWin(){
    const [date, setDate] = useState(timer())
    const [ifDeadline, setIfDeadline] = useState(false)
    useEffect((int)=>{
        if(!ifDeadline && date.days > 0 && date.hours > 0 && date.minutes > 0 && date.seconds > 0){
          int =  setInterval(() => {
                setDate(timer())
            })
            
    } else {
        clearInterval(int)
        setDate({days:0,
        hours:0,
        minutes:0,
        seconds:0})
        setIfDeadline(true)
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
                    <p>{date.hours.toString().padStart(2,"0")}</p>
                    <div className='bgDate'>
                        <p>Hours</p>
                    </div>
                </div>
                <p>:</p>
                <div className='dateContainer'>
                    <p>{date.minutes.toString().padStart(2,"0")}</p>
                    <div className='bgDate'>
                        <p>Minutes</p>
                    </div>
                </div>
                <p>:</p>
                <div className='dateContainer'>
                    <p>{date.seconds.toString().padStart(2,"0")}</p>
                    <div className='bgDate'>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
            <div className='evBtnCont'>
                <p>Check our event page when you wait:</p>
                <a href='https://leadentrepreneursummit.com/'>Go to the event</a>
            </div>
        </div>
    )
}
export default MainWin