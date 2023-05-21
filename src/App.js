import './app.css';
import Header from './modules/scripts/header';
import MainWin from './modules/scripts/mainWin';
import Footer from './modules/scripts/footer';
import EvWin from './modules/scripts/evWin';
import { useState } from 'react';

function App() {
  const [display,setDisplay]=useState('none')

  const onSetDisplay=(display)=>{
    setDisplay(display)
    let height = document.body.scrollHeight;
    window.scrollTo(0, height);
    setTimeout(() => {
      window.scrollTo({top: height, behavior: "smooth"})
    }, 500);
  }
  return (
    <div className="app">
      <Header />
      <MainWin />
      <Footer onSetDisplay={onSetDisplay}/>
      <EvWin display={display}/>
    </div>
  );
}

export default App;
