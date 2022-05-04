import "../css/App.css";
import { ReactComponent as Instagram } from "../images/icons/ig.svg";

const Footer2 = () => {
  return (
    <footer style={{ height: 180, textAlign: "center", background: "#425664" }}>
      <h3
        style={{
          letterSpacing: "0.2rem",
          marginBottom: 16,
          color: "white",
          paddingTop: 26
        }}
      >
        YHTEYSTIEDOT
      </h3>
      <a
        href="mailto:info@saratuononen.com"
        style={{
          flex: 1,
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textDecoration: "none",
          marginBottom: 16,
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
          marginBottom: 8,
          color: "white"
        }}
      >
        +358451235987
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
    </footer>
  );
};

export default Footer2;
