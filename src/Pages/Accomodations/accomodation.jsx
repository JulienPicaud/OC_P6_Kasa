import Collapse from '../../Components/collapse/collapse'
import Footer from '../../Components/footer/footer'
import Header from '../../Components/header/header'
import Tag from '../../Components/tags/tag'
import datas from '../../assets/datas'
import './accomodation.scss'
import Slider from '../../Components/slider/slider'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import greyStar from '../../assets/images/grey_star.png'
import redStar from '../../assets/images/red_star.png'

export default function Accomodations() {
      const urlIdAccomodation = useParams('id').id
      const [currentAccomodation, setCurrentAccomodation] = useState(null)
      
      // Etoile boucler sur les etoiles etoile pleine jusu'à la note.
      useEffect(() => {
            // s'execute TOUJOURS au montage du composant
            // Tableau de dépendance vide alors ne s'actualise pas
            setCurrentAccomodation(
                  datas.find((data) => data.id === urlIdAccomodation)
            )
            //setImageSlider(datas[0].pictures)
      }, [currentAccomodation, urlIdAccomodation])

      //S'execute à la mise à jour du tableau de dépendance
      if (currentAccomodation === undefined) {
            return (document.location.href = '/404')
      }
      if (currentAccomodation === null) {
            return <div>Chargement...</div>
      }
      //Score: faire une boucle ici ou créer un composant a part et passer en props currentAccomodation.rating
      return (
            <>
                  <Header />
                  <Slider imageSlider={currentAccomodation.pictures} />
                  <main className="accomodation">
                        <div className="accomodation_content">
                              <div className="accomodation_content_infos">
                                    <h1>{currentAccomodation.title}</h1>
                                    <p>{currentAccomodation.location}</p>
                                    <Tag />
                              </div>



                              <div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{currentAccomodation.host.name}</span>
							</div>
							<img src={currentAccomodation.host.picture} alt="host of this accomodation" />
						</div>

						<div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= currentAccomodation.rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
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
