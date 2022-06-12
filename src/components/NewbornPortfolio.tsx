import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const NewbornPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/newborn/newborn5.jpg")}
            rightImage={require("../images/newborn/newborn6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn7.jpg")}
            rightImage={require("../images/newborn/newborn8.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn13.jpg")}
            rightImage={require("../images/newborn/newborn12.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn9.jpg")}
            rightImage={require("../images/newborn/newborn17.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn14.jpg")}
            rightImage={require("../images/newborn/newborn15.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn11.jpg")}
            rightImage={require("../images/newborn/newborn16.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn19.jpg")}
            rightImage={require("../images/newborn/newborn2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn1.jpg")}
            rightImage={require("../images/newborn/newborn18.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn3.jpg")}
            rightImage={require("../images/newborn/newborn10.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/newborn/newborn4.jpg")}
            rightImage={""}
          />
        </div>
      </Slide>
    </div>
  );
};

export default NewbornPortfolio;
