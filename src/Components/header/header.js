//import './header.scss'
import './header.css'
import Logo from '../../assets/images/logo.svg'
//import Nav from '../nav/Nav'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
                <p className='test'>lalala</p>
			</h1>
			{/* <Nav /> */}
		</header>
	)
}