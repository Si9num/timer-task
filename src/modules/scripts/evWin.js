import '../styles/evWin.css'
import Card from './tools/card'
import hawaiian from '../../assets/events/hawaiian.jpg'
import mafia from '../../assets/events/mafia.jpg'
import beach from '../../assets/events/beach.jpg'
import client from '../../assets/events/client.jpg'
import design from '../../assets/events/design.jpg'
import party from '../../assets/events/party.jpg'
import security from '../../assets/events/security.jpg'
import system from '../../assets/events/system.jpg'
import { useState } from 'react'

function EvWin(props){
    const[width,setWidth]=useState(['3%','40%','3%','3%','3%','3%','3%','3%'])

    const setNewWidth=(width)=>{
        setWidth(width)
    }
    return (
        <div className="evWin" style={{display:props.display}}>
            <p className='evWinH'>All events</p>
            <div className='cardContainer'>
                <Card name='Hawaiian party' num='01' date ='13.02.2023' img={hawaiian} width={width} id={0} onChangeWidth={setNewWidth}/>
                <Card name='Mafia party' num='02' date ='15.03.2023' img={mafia} width={width} id={1} onChangeWidth={setNewWidth}/>
                <Card name='Night party' num='03' date ='18.03.2023' img={party} width={width} id={2} onChangeWidth={setNewWidth}/>
                <Card name='Party on the beach' num='04' date ='13.06.2023' img={beach} width={width} id={3} onChangeWidth={setNewWidth}/>
                <Card name='Home Security' num='05' date ='11.07.2023' img={security} width={width}id={4} onChangeWidth={setNewWidth}/>
                <Card name='Network Design & Implementation' num='06' date ='19.07.2023' img={design} width={width}id={5} onChangeWidth={setNewWidth} />
                <Card name='System Design & Engineering' num='07' date ='23.07.2023' img={system} width={width}id={6} onChangeWidth={setNewWidth}/>
                <Card name='Client Care Plans' num='08' date ='13.08.2023' img={client} width={width}id={7} onChangeWidth={setNewWidth}/>
            </div>
            <div style= {{height:"10vh",width:'10%'}} ></div>
        </div>
    )
}
export default EvWin