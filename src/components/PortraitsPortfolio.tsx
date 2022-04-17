import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";
import ToTopButton from "./ToTopButton";

const PortraitsPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/portraits/portraits3.jpg")}
            rightImage={require("../images/portraits/portraits2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portraits1.jpg")}
            rightImage={require("../images/portraits/portraits4.jpg")}
          />
        </div>
      </Slide>
      <ToTopButton />
    </div>
  );
};

export default PortraitsPortfolio;
