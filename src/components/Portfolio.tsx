import { Element } from "react-scroll";
import "../css/App.css";
import Tabs from "./Tabs";

const Portfolio = () => {
  return (
    <div>
      <Element name="portfolio" style={{ height: "auto" }}>
        <Tabs />
      </Element>
    </div>
  );
};

export default Portfolio;
