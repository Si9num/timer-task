import '../styles/header.css'

function Header() {
    return (
      <div className="header">
        <div className="vectorLeft"></div>
        <div className="logo">
       <a href=''><img src={require(`../../assets/logo.png`)} alt='logo'></img> </a> 
        </div>
        <div className='vectorRight'></div>
      </div>
    );
  }

  export default Header