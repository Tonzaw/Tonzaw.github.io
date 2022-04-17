import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";
import ToTopButton from "./ToTopButton";

const CouplesPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/couples/couples3.jpg")}
            rightImage={require("../images/couples/couples2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples9.jpg")}
            rightImage={require("../images/couples/couples10.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples11.jpg")}
            rightImage={require("../images/couples/couples12.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples13.jpg")}
            rightImage={require("../images/couples/couples14.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples15.jpg")}
            rightImage={require("../images/couples/couples16.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples7.jpg")}
            rightImage={require("../images/couples/couples6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples8.jpg")}
            rightImage={require("../images/couples/couples18.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples1.jpg")}
            rightImage={require("../images/couples/couples4.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/couples/couples5.jpg")}
            rightImage={require("../images/couples/couples8.jpg")}
          />
        </div>
      </Slide>
      <ToTopButton />
    </div>
  );
};

export default CouplesPortfolio;
