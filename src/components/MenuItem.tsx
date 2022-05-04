import { Link } from "react-router-dom";
import "../css/App.css";

const MenuItem = (props: {
  name: string;
  link: string;
  size: string;
  side: string;
}) => {
  return (
    <div
      style={
        props.side === "left"
          ? {
              flex: 1,
              textAlign: "center",
              display: "flex",
              alignItems: "center"
            }
          : {
              flex: 1,
              textAlign: "center",
              display: "flex",
              alignItems: "center"
            }
      }
    >
      {props.size === "big" && (
        <Link
          className="menuItem"
          style={{
            color: "#272727",
            fontSize: "0.90rem",
            letterSpacing: "0.20em",
            textAlign: "center",
            verticalAlign: "middle",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Roboto-Bold",
            width: "100%"
          }}
          to={props.link}
        >
          {props.name}
        </Link>
      )}
      {props.size === "medium" && (
        <Link
          className="menuItem"
          style={{
            color: "#272727",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textAlign: "center",
            verticalAlign: "middle",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Roboto-Bold",
            width: "100%"
          }}
          to={props.link}
        >
          {props.name}
        </Link>
      )}
    </div>
  );
};

export default MenuItem;
