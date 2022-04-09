import { Link } from "react-router-dom";

const MainLogo = (props: { size: string }) => {
  return (
    <div
      style={
        props.size === "big"
          ? {
              float: "left",
              margin: 16,
              padding: 16,
              width: 250
            }
          : {
              float: "left",
              margin: 16,
              padding: 16,
              width: 150
            }
      }
    >
      <Link to={"/"}>
        {props.size === "big" && (
          <img
            src={require("../images/sara-logo.png")}
            alt=""
            style={{ height: "auto", width: 250 }}
          />
        )}
        {props.size === "medium" && (
          <img
            src={require("../images/sara-logo.png")}
            alt=""
            style={{ height: "auto", width: 150 }}
          />
        )}
      </Link>
    </div>
  );
};

export default MainLogo;
