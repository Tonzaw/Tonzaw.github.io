import { Link } from "react-scroll";
import { ReactComponent as Up } from "../images/icons/up.svg";

const ToTopButton = () => {
  return (
    <Link to="portfolio" spy={true} smooth={true} duration={500}>
      <button className="toTopButton">
        <Up
          fill="#425664"
          stroke="#425664"
          style={{ height: 26, width: 26, alignSelf: "center" }}
        />
      </button>
    </Link>
  );
};

export default ToTopButton;
