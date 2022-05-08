import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const BoudoirPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir1.jpg")}
            rightImage={require("../images/boudoir/boudoir2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir3.jpg")}
            rightImage={require("../images/boudoir/boudoir4.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir5.jpg")}
            rightImage={require("../images/boudoir/boudoir6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir7.jpg")}
            rightImage={require("../images/boudoir/boudoir8.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir13.jpg")}
            rightImage={require("../images/boudoir/boudoir14.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir15.jpg")}
            rightImage={require("../images/boudoir/boudoir16.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir17.jpg")}
            rightImage={require("../images/boudoir/boudoir11.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir12.jpg")}
            rightImage={require("../images/boudoir/boudoir10.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir18.jpg")}
            rightImage={""}
          />
        </div>
      </Slide>
    </div>
  );
};

export default BoudoirPortfolio;
