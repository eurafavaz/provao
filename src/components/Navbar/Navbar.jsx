import '../Navbar/Navbar.css'
import logo from '../../assets/images/disney-logo.png'

function Navbar() {
  return (
    <nav className='navbar-df'>
      <img className='navbar-image' src={logo} alt="" />
    </nav>
  );
}

export default Navbar;