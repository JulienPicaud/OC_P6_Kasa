import './error.scss'
import { Link } from 'react-router-dom'
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'

function error() {
      return (
            <div className="notFound">
                  <Header />
                  <div className="notFound_infos">
                        <h1 className="notFound_infos_title">404</h1>
                        <p className="notFound_infos_content">
                              La page que vous recherchez n'existe pas.
                        </p>
                  </div>
                  <Link className="notFound_infos_return" to="/">
                        Retourner sur la page d'accueil
                  </Link>
                  <Footer />
            </div>
      )
}
export default error
