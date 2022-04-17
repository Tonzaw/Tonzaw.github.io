import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";
import ToTopButton from "./ToTopButton";

const PetsPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow leftImage={""} rightImage={""} />
          <PortfolioRow leftImage={""} rightImage={""} />
        </div>
      </Slide>
      <ToTopButton />
    </div>
  );
};

export default PetsPortfolio;
