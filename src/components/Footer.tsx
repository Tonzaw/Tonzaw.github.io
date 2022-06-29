import "../css/App.css";

const Footer = () => {
  return (
    <div className="container" style={{ height: 180, textAlign: "center" }}>
      <div
        style={{
          background: "#272727",
          height: 1
        }}
      ></div>
      <h3 style={{ letterSpacing: "0.2rem", marginBottom: 16 }}>
        YHTEYSTIEDOT
      </h3>
      <a
        href="mailto:saratuononen.photography@gmail.com"
        style={{
          flex: 1,
          color: "#272727",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textDecoration: "none",
          fontWeight: "bold",
          marginBottom: 16
        }}
      >
        SARATUONONEN.PHOTOGRAPHY@GMAIL.COM
      </a>
      <p
        style={{
          flex: 1,
          color: "#272727",
          fontSize: "0.8rem",
          letterSpacing: "0.15em",
          fontWeight: "bold",
          marginBottom: 16
        }}
      >
        +358 41 5328222
      </p>
      <a
        href="http://instagram.com/_u/saratuononen_photography/"
        target="_blank"
        rel="noreferrer"
        style={{
          flex: 1,
          color: "#272727",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textDecoration: "none",
          fontWeight: "bold",
          marginBottom: 16
        }}
      >
        <img
          src={require("../images/icons/instagram.png")}
          alt=""
          style={{ height: 20, width: 20 }}
        />
      </a>
    </div>
  );
};

export default Footer;
