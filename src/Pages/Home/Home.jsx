import Footer from "../../Components/footer/footer";
import Header from "../../Components/header/header";
import "./Home.scss";
import Gallery from "../../Components/gallery/gallery"
import Banner from "../../Components/banner/banner"


function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
