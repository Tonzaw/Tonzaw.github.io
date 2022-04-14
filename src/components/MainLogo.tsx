import { Link } from "react-router-dom";

const MainLogo = (props: { size: string }) => {
  return (
    <div
      style={
        props.size === "big"
          ? {
              float: "left",
              margin: 16,
              width: 200
            }
          : {
              float: "left",
              margin: 16,
              width: 150
            }
      }
    >
      <Link to={"/"}>
        {props.size === "big" && (
          <img
            src={require("../images/icons/sara-logo2.png")}
            alt=""
            style={{ height: "auto", width: 200 }}
          />
        )}
        {props.size === "medium" && (
          <img
            src={require("../images/icons/sara-logo2.png")}
            alt=""
            style={{ height: "auto", width: 150 }}
          />
        )}
      </Link>
    </div>
  );
};

export default MainLogo;
