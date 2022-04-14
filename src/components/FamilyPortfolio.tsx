import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const FamilyPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/family/family10.jpg")}
            rightImage={require("../images/family/family2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family3.jpg")}
            rightImage={require("../images/family/family1.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family5.jpg")}
            rightImage={require("../images/family/family8.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family7.jpg")}
            rightImage={require("../images/family/family6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family11.jpg")}
            rightImage={require("../images/family/family12.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family13.jpg")}
            rightImage={require("../images/family/family14.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family15.jpg")}
            rightImage={require("../images/family/family4.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family9.jpg")}
            rightImage={""}
          />
        </div>
      </Slide>
    </div>
  );
};

export default FamilyPortfolio;
