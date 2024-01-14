import datas from '../../assets/datas'
import './tag.scss'
import { useParams } from 'react-router-dom'



export default function Tag() {

const UrlIdAccomodation = useParams('id').id

const CurrentAccomodation = [
    datas.find((data) => data.id === UrlIdAccomodation),
]

return(
    <div className='tag'>
    {CurrentAccomodation[0].tags.map((tag, index) => {
        return (
            <button key={index}>{tag}</button>
        )
    })}
</div>
)
}
