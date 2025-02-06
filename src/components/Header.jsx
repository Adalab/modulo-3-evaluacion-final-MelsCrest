import '../styles/Header.scss'
import HPLogo from'../images/harry_potter.png'

function Header() {
  return (
    <div className='header'>
      <img src={HPLogo} alt="" className='header_logo'/>
    </div>
  )
}

export default Header