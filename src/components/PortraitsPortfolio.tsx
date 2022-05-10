import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const PortraitsPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/portraits/portrait3.jpg")}
            rightImage={require("../images/portraits/portrait2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait5.jpg")}
            rightImage={require("../images/portraits/portrait6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait1.jpg")}
            rightImage={require("../images/portraits/portrait4.jpg")}
          />
        </div>
      </Slide>
    </div>
  );
};

export default PortraitsPortfolio;
