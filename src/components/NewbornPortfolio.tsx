import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const NewbornPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/newborn/newborn1.jpg")}
            rightImage={require("../images/newborn/newborn8.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn10.jpg")}
            rightImage={require("../images/newborn/newborn6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn2.jpg")}
            rightImage={require("../images/newborn/newborn7.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn5.jpg")}
            rightImage={require("../images/newborn/newborn9.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn3.jpg")}
            rightImage={require("../images/newborn/newborn4.jpg")}
          />
        </div>
      </Slide>
    </div>
  );
};

export default NewbornPortfolio;
