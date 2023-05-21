import './app.css';
import Header from './modules/scripts/header';
import MainWin from './modules/scripts/mainWin';
import Footer from './modules/scripts/footer';
import EvWin from './modules/scripts/evWin';

function App() {
  
  return (
    <div className="app">
      <Header />
      <MainWin />
      <Footer />
      <EvWin />
    </div>
  );
}

export default App;
