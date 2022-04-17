import { Link } from "react-scroll";

const ToTopButton = () => {
  return (
    <Link to="portfolio" spy={true} smooth={true} duration={500}>
      <button className="toTopButton">
        <img
          src={require("../images/icons/up.png")}
          alt=""
          style={{ height: 26, width: 26, alignSelf: "center" }}
        />
      </button>
    </Link>
  );
};

export default ToTopButton;
