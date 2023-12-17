import Footer from "../../Components/footer/footer";
import Header from "../../Components/header/header";
import "./Home.css";
import Gallery from "../../Components/gallery/gallery"



function Home() {
  return (
    <div className="Home">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
