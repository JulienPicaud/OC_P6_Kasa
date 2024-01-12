import datas from '../../assets/datas'
import './accomodation.scss'
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import Collapse from "../../Components/collapse/collapse";
// import Slider from "../../Components/slider/slider";
import { useParams } from "react-router-dom";



export default function Accomodations (){
// Hook useParams pour récuperer l'ID dans l'url
	const UrlIdAccomodation = useParams('id').id;
// On fait correspondre l'id de l'url avec l'id dans le tableau de donnéees data
    const CurrentAccomodation = datas.filter(data => data.id === UrlIdAccomodation);
// Est ce que je dois utiliser un useeffect 

    const hostName = CurrentAccomodation[0].host.name.split(' '); 
	const rating = CurrentAccomodation[0].rating;
    const description  = CurrentAccomodation[0].description;
	const equipments = CurrentAccomodation[0].equipments;
	const title = CurrentAccomodation[0].title;
    const location = CurrentAccomodation[0].location;

    return (
        <>
        < Header/>
        
        <h1>{title}</h1>
        <p>{location}</p>

        <script>console.log(UrlIdAccomodation)</script>
        <Collapse />
        < Footer/>
            </>
        )
    }
