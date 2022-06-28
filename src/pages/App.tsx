import "../css/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MenuBar from "../components/MenuBar";
import { Element, Link } from "react-scroll";
import Tabs from "../components/Tabs";
import Footer2 from "../components/Footer2";
import { useWindowDimensions } from "../common";
import BurgerMenu from "../components/BurgerMenu";
import MainLogoSmall from "../components/MainLogoSmall";
import { usePreloadImages } from "../utils";
import img1 from "../images/portraits/portrait56.jpg";
import img2 from "../images/family/family25.jpg";
import img3 from "../images/carousel-image3.jpg";
import img4 from "../images/newborn/newborn3.jpg";
import img5 from "../images/family/family28.jpg";
import img6 from "../images/family/family26.jpg";
import img7 from "../images/carousel-image7.jpg";
import img8 from "../images/pets/pets17.jpg";

const preload = [img1, img2, img3, img4, img5, img6, img7, img8];

function App() {
  const { width } = useWindowDimensions();
  usePreloadImages(preload);

  return (
    <div className="App page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      {width > 768 ? "" : <MainLogoSmall />}
      <div style={{ position: "relative" }}>
        <Carousel
          className="Carousel"
          autoPlay
          infiniteLoop
          stopOnHover={false}
          interval={6000}
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
                aria-label="previous image"
                className="control-arrow control-prev"
                onClick={clickHandler}
                style={{
                  alignItems: "center",
                  padding: 16,
                  background: "transparent"
                }}
              >
                <img
                  style={
                    width < 376
                      ? { height: "30px", width: "30px" }
                      : { height: "40px", width: "40px" }
                  }
                  src={require("../images/icons/prev.png")}
                  alt=""
                />
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <button
                aria-label="next image"
                className="control-arrow control-next"
                onClick={clickHandler}
                style={{
                  alignItems: "center",
                  padding: 16,
                  background: "transparent"
                }}
              >
                <img
                  style={
                    width < 376
                      ? { height: "30px", width: "30px" }
                      : { height: "40px", width: "40px" }
                  }
                  src={require("../images/icons/next.png")}
                  alt=""
                />
              </button>
            )
          }
        >
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
          <div>
            <img src={img8} alt="" />
          </div>
        </Carousel>
        {width >= 1206 ? (
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            href="#"
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
              aria-label={"portfolio"}
              style={{
                alignItems: "center",
                padding: 16,
                background: "transparent",
                border: 0,
                cursor: "pointer"
              }}
            >
              <img
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
          <h1>SARA TUONONEN</h1>
          <h2>PORTFOLIO</h2>
          <Tabs />
        </Element>
      </div>
      <Footer2 />
    </div>
  );
}

export default App;
