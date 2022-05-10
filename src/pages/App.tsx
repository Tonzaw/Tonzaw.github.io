import "../css/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MenuBar from "../components/MenuBar";
import { Element, Link } from "react-scroll";
import Tabs from "../components/Tabs";
import Footer2 from "../components/Footer2";
import { useWindowDimensions } from "../common";
import BurgerMenu from "../components/BurgerMenu";

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className="App page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <div style={{ position: "relative" }}>
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
          showIndicators={false}
          renderArrowPrev={(clickHandler, hasPrev) =>
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
                  src={require("../images/icons/prev.png")}
                  alt=""
                />
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
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
                  src={require("../images/icons/next.png")}
                  alt=""
                />
              </button>
            )
          }
        >
          <div>
            <img src={require("../images/newborn/newborn3.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../images/couples/couples20.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../images/family/family1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../images/portraits/portrait6.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../images/family/family19.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../images/family/family16.jpg")} alt="" />
          </div>
        </Carousel>
        {width >= 1206 ? (
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              position: "absolute",
              width: "100%",
              zIndex: 998,
              bottom: 0,
              left: 0,
              cursor: "pointer"
            }}
          >
            <button
              className="control-arrow control-next arrow-down"
              style={{
                alignItems: "center",
                padding: 16,
                background: "transparent",
                border: 0,
                cursor: "pointer"
              }}
            >
              <img
                className="arrow-img"
                style={{
                  height: "40px",
                  width: "40px"
                }}
                src={require("../images/icons/down.png")}
                alt=""
              />
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div style={{ minHeight: "100vh" }}>
        <Element name="portfolio" id="portfolio" style={{ paddingTop: 24 }}>
          <Tabs />
        </Element>
      </div>
      <Footer2 />
    </div>
  );
}

export default App;
