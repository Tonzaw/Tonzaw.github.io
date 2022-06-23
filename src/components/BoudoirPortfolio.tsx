import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const BoudoirPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir15.jpg")}
            rightImage={require("../images/boudoir/boudoir5.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir6.jpg")}
            rightImage={require("../images/boudoir/boudoir7.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir8.jpg")}
            rightImage={require("../images/boudoir/boudoir12.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir9.jpg")}
            rightImage={require("../images/boudoir/boudoir10.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir13.jpg")}
            rightImage={require("../images/boudoir/boudoir14.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir18.jpg")}
            rightImage={require("../images/boudoir/boudoir17.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir19.jpg")}
            rightImage={require("../images/boudoir/boudoir1.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir2.jpg")}
            rightImage={require("../images/boudoir/boudoir4.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir16.jpg")}
            rightImage={require("../images/boudoir/boudoir3.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir26.jpg")}
            rightImage={require("../images/boudoir/boudoir21.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir24.jpg")}
            rightImage={require("../images/boudoir/boudoir22.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir27.jpg")}
            rightImage={require("../images/boudoir/boudoir25.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir29.jpg")}
            rightImage={require("../images/boudoir/boudoir30.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir31.jpg")}
            rightImage={require("../images/boudoir/boudoir32.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir11.jpg")}
            rightImage={require("../images/boudoir/boudoir20.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/boudoir/boudoir23.jpg")}
            rightImage={require("../images/boudoir/boudoir28.jpg")}
          />
        </div>
      </Slide>
    </div>
  );
};

export default BoudoirPortfolio;
