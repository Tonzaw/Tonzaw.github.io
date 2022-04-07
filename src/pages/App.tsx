import "../css/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MenuBar from "../components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Carousel
        className="Carousel"
        autoPlay
        infiniteLoop
        stopOnHover={false}
        interval={8000}
        showThumbs={false}
        swipeable={false}
        animationHandler={"fade"}
        transitionTime={1000}
        showStatus={false}
        dynamicHeight={false}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button
              className="control-arrow control-prev"
              onClick={clickHandler}
              style={{
                alignItems: "center",
                padding: 16,
                background: "transparent"
              }}
            >
              <img
                className="arrow-img"
                style={{ height: "40px", width: "40px", color: "white" }}
                src={require("../images/prev.png")}
                alt=""
              />
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button
              className="control-arrow control-next"
              onClick={clickHandler}
              style={{
                alignItems: "center",
                padding: 16,
                background: "transparent"
              }}
            >
              <img
                className="arrow-img"
                style={{
                  height: "40px",
                  width: "40px"
                }}
                src={require("../images/next.png")}
                alt=""
              />
            </button>
          )
        }
      >
        <div>
          <img src={require("../images/5.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../images/6.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../images/7.jpg")} alt="" />
        </div>
      </Carousel>
      <div style={{ height: "1200px" }}></div>
    </div>
  );
}

export default App;
