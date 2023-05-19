import '../styles/header.css'

function Header() {
    return (
      <div className="header">
        <div className="vectorLeft"></div>
        <div className="logo">
        <img src={require(`../../assets/logo.png`)} alt='img'></img>
        </div>
        <div className='vectorRight'></div>
      </div>
    );
  }

  export default Header