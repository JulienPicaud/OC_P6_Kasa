import Collapse from '../../Components/collapse/collapse'
import Footer from '../../Components/footer/footer'
import Header from '../../Components/header/header'
import Tag from '../../Components/tags/tag'
import datas from '../../assets/datas'
import './accomodation.scss'
import Slider from '../../Components/slider/slider'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Stars from '../../Components/stars/stars'

export default function Accomodations() {
      const urlIdAccomodation = useParams('id').id
      const [currentAccomodation, setCurrentAccomodation] = useState(null)
            useEffect(() => {
            setCurrentAccomodation(
                  datas.find((data) => data.id === urlIdAccomodation)
            )
      }, [currentAccomodation, urlIdAccomodation])
      if (currentAccomodation === undefined) {
            return (document.location.href = '/404')
      }
      if (currentAccomodation === null) {
            return <div>Chargement...</div>
      }
      return (
            <>
                  <Header />
                  <Slider imageSlider={currentAccomodation.pictures} />
                  <main className="accomodation">
                        <div className="accomodation_content">
                              <div className="accomodation_content_infos">
                                    <h1>{currentAccomodation.title}</h1>
                                    <p>{currentAccomodation.location}</p>
                                    <Tag tags={currentAccomodation.tags}/>
                              </div>



                              <div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{currentAccomodation.host.name}</span>
							</div>
							<img src={currentAccomodation.host.picture} alt="host of this accomodation" />
						</div>

						<div className="accomodation_content_host_stars">
                                    <Stars scoreAccomodation={currentAccomodation.rating} />

						</div>
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
                        
                  </main>
                  <Footer />
            </>
      )
}
