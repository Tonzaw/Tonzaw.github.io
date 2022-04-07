import { Link } from "react-router-dom";

const MenuItem = (props: { name: string; link: string; size: string }) => {
  return (
    <div
      style={{
        flex: 1,
        margin: 16,
        alignSelf: "center",
        float: "right"
      }}
    >
      {props.size === "big" && (
        <Link
          style={{
            color: "white",
            fontSize: "1.25rem",
            letterSpacing: "0.25em",
            textAlign: "center",
            verticalAlign: "middle",
            textDecoration: "none",
            textShadow: "1px 1px 1px black"
          }}
          to={props.link}
        >
          {props.name}
        </Link>
      )}
      {props.size === "medium" && (
        <Link
          style={{
            color: "white",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textAlign: "center",
            verticalAlign: "middle",
            textDecoration: "none",
            textShadow: "1px 1px 1px black"
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
