import "../css/App.css";
import { ReactComponent as Instagram } from "../images/icons/ig.svg";
import ToTopButtonSimple from "./ToTopButtonSimple";

const Footer2 = () => {
  return (
    <footer
      style={{ height: "auto", textAlign: "left", background: "#425664" }}
    >
      <div className="container" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}></div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
          }}
        >
          <p
            style={{
              letterSpacing: "0.15rem",
              marginBottom: 16,
              color: "white",
              flex: "1"
            }}
          >
            YHTEYSTIEDOT
          </p>
          <a
            href="mailto:info@saratuononen.com"
            style={{
              flex: 1,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
              color: "white"
            }}
          >
            INFO@SARATUONONEN.COM
          </a>
          <p
            style={{
              flex: 1,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "white"
            }}
          >
            +358 41 5328222
          </p>
          <div
            style={{
              flex: 1
            }}
          >
            <a
              href="https://instagram.com/saratuononen_photography"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                fill="#ffffff"
                stroke="#ffffff"
                style={{
                  height: 32,
                  width: 32,
                  alignSelf: "center"
                }}
              />
            </a>
          </div>
          <p
            style={{
              color: "white",
              fontSize: 12,
              flex: 1
            }}
          >
            © 2022 Sara Tuononen
          </p>
        </div>
        <div style={{ flex: "1" }}>
          <ToTopButtonSimple />
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
