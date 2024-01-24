import Collapse from '../../Components/collapse/collapse'
import Footer from '../../Components/footer/footer'
import Header from '../../Components/header/header'
import Tag from '../../Components/tags/tag'
import datas from '../../assets/datas'
import './accomodation.scss'
import Slider from "../../Components/slider/slider";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Accomodations() {
      const urlIdAccomodation = useParams('id').id
      const [currentAccomodation, setCurrentAccomodation] = useState(null)
      const [imageSlider, setImageSlider] = useState([]);


      useEffect(() => {
            
            // s'execute TOUJOURS au montage du composant
            // s'éxécute AUSSI a chaque MAJ du composant SSI tableau de dépendant vide.
            setCurrentAccomodation(
                  datas.find((data) => data.id === urlIdAccomodation),
                  setImageSlider(datas[0].pictures)
            )
      }, [currentAccomodation,urlIdAccomodation])
      
      //S'execute à la mise à jour du tableau de dépendance
      if (currentAccomodation === undefined) {
            return (document.location.href = '/404')
      }
      if (currentAccomodation === null) {
            return <div>Chargement...</div>
      }
//Pas compris la difference entre le content des collapses qui ne necessitent pas de useEffect et les images du slider qui en ont besoin
      return (
            <>
                  <Header />
                  <Slider imageSlider={imageSlider}/>
                  <main className="accomodation">
                        <div className="accomodation_content">
                              <div className="accomodation_content_infos">
                                    <h1>{currentAccomodation.title}</h1>
                                    <p>{currentAccomodation.location}</p>
                                    <Tag />
                              </div>

                              <div className="accomodation_collapse">
                                    <div className="accomodation_collapse_item">
                                          <Collapse
                                                title={'Description'}
                                                content={
                                                      currentAccomodation.description
                                                }
                                          />
                                    </div>
                                    <div className="accomodation_collapse_item">
                                          <Collapse
                                                title={'Équipements'}
                                                content={
                                                      currentAccomodation.equipments
                                                }
                                          />
                                    </div>
                              </div>
                        </div>
                  </main>
                  <Footer />
            </>
      )
}
