import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const PetsPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/pets/pets1.jpg")}
            rightImage={require("../images/pets/pets6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/pets/pets15.jpg")}
            rightImage={require("../images/pets/pets2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/pets/pets7.jpg")}
            rightImage={require("../images/pets/pets8.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/pets/pets11.jpg")}
            rightImage={require("../images/pets/pets12.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/pets/pets13.jpg")}
            rightImage={require("../images/pets/pets14.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/pets/pets9.jpg")}
            rightImage={require("../images/pets/pets16.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/pets/pets17.jpg")}
            rightImage={require("../images/pets/pets10.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/pets/pets18.jpg")}
            rightImage={require("../images/pets/pets4.jpg")}
          />
          <PortfolioRow
            leftImage={""}
            rightImage={require("../images/pets/pets3.jpg")}
          />
        </div>
      </Slide>
    </div>
  );
};

export default PetsPortfolio;
