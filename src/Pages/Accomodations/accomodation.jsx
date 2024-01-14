import datas from '../../assets/datas'
import './accomodation.scss'
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import Collapse from '../../Components/collapse/collapse'
import Tag from '../../Components/tags/tag'
// import Slider from "../../Components/slider/slider";
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Accomodations() {
      // Hook useParams pour récuperer l'ID dans l'url
      const UrlIdAccomodation = useParams('id').id
      // On fait correspondre l'id de l'url avec l'id dans le tableau de donnéees data
      console.log('jefiltre')

      const CurrentAccomodation = [
            datas.find((data) => data.id === UrlIdAccomodation),
      ]
      //if tableau vide alors redirection 404
      console.log(CurrentAccomodation)

      useEffect(() => {
            //const CurrentAccomodation = [datas.find(data => data.id === UrlIdAccomodation)];
            console.log('useEffect')
      }, [UrlIdAccomodation])

      // Vérifiez si CurrentAccomodation est vide et redirige sur /404 si aucun élement n'est trouvé
      if (!CurrentAccomodation[0]) {
            return (document.location.href = '/404')
      }

      // usestate: calculs
      // useeffect: tableau, etc.

      //tout récupérer avec useState
      //const hostName = CurrentAccomodation[0].host.name.split(' ');
      //const rating = CurrentAccomodation[0].rating;
      const description = CurrentAccomodation[0].description
      const equipments = CurrentAccomodation[0].equipments
      const title = CurrentAccomodation[0].title
      const location = CurrentAccomodation[0].location

      return (
            <>
                  <Header />

                  <h1>{title}</h1>
                  <p>{location}</p>
                  <Tag />


                  <div className="accomodation_collapse">
                        <div className="accomodation_collapse_item">
                              <Collapse
                                    title={'Description'}
                                    content={description}
                              />
                        </div>
                        <div className="accomodation_collapse_item">
                              <Collapse
                                    title={'Équipements'}
                                    content={equipments}
                              />
                        </div>
                  </div>
                  <Footer />
            </>
      )
}
