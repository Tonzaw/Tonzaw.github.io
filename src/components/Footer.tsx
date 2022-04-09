import { Link } from "react-router-dom";
import "../css/App.css";

const Footer = () => {
  return (
    <div style={{ width: "100%", height: 200, background: "#f2f2f2" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          height: "100%"
        }}
      >
        <div style={{ flex: 1, marginTop: 16, marginBottom: 16 }}>
          <h4 style={{ fontSize: 16, letterSpacing: "0.3rem" }}>LINKIT</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left"
            }}
          >
            <Link
              style={{
                flex: 1,
                color: "#6e6e6e",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textDecoration: "none",
                fontWeight: "bold",
                marginBottom: 16
              }}
              to={"contact"}
            >
              YHTEYSTIEDOT
            </Link>
            <Link
              style={{
                flex: 1,
                color: "#6e6e6e",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textDecoration: "none",
                fontWeight: "bold",
                marginBottom: 16
              }}
              to={"contact"}
            >
              HINNASTO
            </Link>
            <Link
              style={{
                flex: 1,
                color: "#6e6e6e",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textDecoration: "none",
                fontWeight: "bold",
                marginBottom: 16
              }}
              to={"contact"}
            >
              MINUSTA
            </Link>
          </div>
        </div>
        <div style={{ flex: 1, marginTop: 16, marginBottom: 16 }}>
          <h4 style={{ fontSize: 16, letterSpacing: "0.3rem" }}>YHTEYTIEDOT</h4>
          <a
            href="mailto:info@saratuononen.com"
            style={{
              flex: 1,
              color: "#6e6e6e",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
              fontWeight: "bold",
              marginBottom: 16
            }}
          >
            INFO@SARATUONONEN.COM
          </a>
          <p
            style={{
              flex: 1,
              color: "#6e6e6e",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              fontWeight: "bold",
              marginBottom: 16
            }}
          >
            +358451235987
          </p>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "right",
            marginTop: 16,
            marginBottom: 16
          }}
        >
          <h4 style={{ fontSize: 16, letterSpacing: "0.3rem" }}>
            SEURAA SOMESSA
          </h4>
          <a
            href="https://instagram.com/saratuononen_photography"
            target="_blank"
            style={{
              flex: 1,
              color: "#6e6e6e",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
              fontWeight: "bold",
              marginBottom: 16
            }}
          >
            <img
              src={require("../images/instagram.png")}
              alt=""
              style={{ height: 18, width: 18 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
