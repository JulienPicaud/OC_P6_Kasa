import { Link } from 'react-router-dom'
import './nav.scss'
 
function nav() {
    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='navList'>
            <li className={currentRoute === '/' ? 'navList_item_active' : 'navList_item'}>

            <Link to="/">Accueil</Link>
            </li>
            <li className={currentRoute === '/about' ? 'navList_item_active' : 'navList_item'}>

            <Link to="/about">A propos</Link>
            </li>
            </ul>
        </nav>
    )
}

export default nav