import "../css/App.css";

const Footer2 = () => {
  return (
    <div
      className="container"
      style={{ width: "100%", height: 180, textAlign: "center" }}
    >
      <div
        style={{
          background: "#272727",
          height: 1
        }}
      ></div>
      <h4 style={{ fontSize: 16, letterSpacing: "0.3rem", marginBottom: 16 }}>
        YHTEYSTIEDOT
      </h4>
      <a
        href="mailto:info@saratuononen.com"
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
        INFO@SARATUONONEN.COM
      </a>
      <p
        style={{
          flex: 1,
          color: "#272727",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          fontWeight: "bold",
          marginBottom: 16
        }}
      >
        +358451235987
      </p>
      <a
        href="https://instagram.com/saratuononen_photography"
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
          style={{ height: 18, width: 18 }}
        />
      </a>
    </div>
  );
};

export default Footer2;
