import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const PetsPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/pets/pets1.jpg")}
            rightImage={""}
          />
          <PortfolioRow leftImage={""} rightImage={""} />
        </div>
      </Slide>
    </div>
  );
};

export default PetsPortfolio;
