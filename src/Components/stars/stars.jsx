import redStar from '../../assets/images/red_star.png'
import greyStar from '../../assets/images/grey_star.png'

export default function Stars({scoreAccomodation}) {
      return <div>{[1,2,3,4,5].map((index) => {
            return (
                  <img
                        key={index}
                        src={
                              index <= scoreAccomodation
                                    ? redStar
                                    : greyStar
                        }
                        alt="star"
                  />
            )
      })}</div>
}
