import './header.scss'
import Logo from '../../assets/images/logo.svg'
import Nav from '../nav/nav'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Nav />
		</header>
	)
}