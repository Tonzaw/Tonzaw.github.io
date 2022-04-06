import "./css/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Carousel
        className="Carousel"
        autoPlay
        infiniteLoop
        showArrows={false}
        stopOnHover={false}
        interval={8000}
        showThumbs={false}
        animationHandler={"fade"}
        transitionTime={1000}
        showStatus={false}
        dynamicHeight={false}
      >
        <div>
          <img src={require("./images/4.jpeg")} alt="" />
        </div>
        <div>
          <img src={require("./images/5.jpg")} alt="" />
        </div>
        <div>
          <img src={require("./images/3.jpg")} alt="" />
        </div>
      </Carousel>
      <div style={{ height: "800px" }}>asd</div>
    </div>
  );
}

export default App;
