import { Link } from "react-router-dom";
import { useWindowDimensions } from "../common";

const MainLogoSmall = () => {
  const { width } = useWindowDimensions();
  return (
    <div
      style={{
        marginTop: 16,
        width: "100%",
        position: "fixed",
        zIndex: 998,
        textAlign: "center"
      }}
    >
      <Link to={"/"}>
        <img
          src={require("../images/icons/sara-logo2.png")}
          alt=""
          style={
            width > 470
              ? { height: "auto", width: 150 }
              : { height: "auto", width: 90 }
          }
        />
      </Link>
    </div>
  );
};

export default MainLogoSmall;
