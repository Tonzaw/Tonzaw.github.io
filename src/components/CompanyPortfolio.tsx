import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const CompanyPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/company/companies2.jpg")}
            rightImage={require("../images/company/companies3.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies4.jpg")}
            rightImage={require("../images/company/companies5.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies6.jpg")}
            rightImage={require("../images/company/companies7.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies8.jpg")}
            rightImage={require("../images/company/companies11.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies10.jpg")}
            rightImage={require("../images/company/companies9.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies24.jpg")}
            rightImage={require("../images/company/companies12.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies14.jpg")}
            rightImage={require("../images/company/companies15.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies16.jpg")}
            rightImage={require("../images/company/companies17.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies18.jpg")}
            rightImage={require("../images/company/companies19.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies20.jpg")}
            rightImage={require("../images/company/companies21.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies22.jpg")}
            rightImage={require("../images/company/companies23.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies26.jpg")}
            rightImage={require("../images/company/companies27.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies28.jpg")}
            rightImage={require("../images/company/companies29.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies30.jpg")}
            rightImage={require("../images/company/companies31.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies25.jpg")}
            rightImage={require("../images/company/companies13.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/company/companies32.jpg")}
            rightImage={require("../images/company/companies33.jpg")}
          />
        </div>
      </Slide>
    </div>
  );
};

export default CompanyPortfolio;
