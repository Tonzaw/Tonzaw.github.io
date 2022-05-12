import { Link } from "react-scroll";
import { ReactComponent as Up } from "../images/icons/up.svg";
import { primaryColor } from "../styles/colors";

const ToTopButton = () => {
  return (
    <Link
      to="portfolio"
      href="#portfolio"
      spy={true}
      smooth={true}
      duration={500}
    >
      <button aria-label="back to top" className="toTopButton">
        <Up
          fill={primaryColor}
          stroke={primaryColor}
          className="toTopButtonIcon"
        />
      </button>
    </Link>
  );
};

export default ToTopButton;
