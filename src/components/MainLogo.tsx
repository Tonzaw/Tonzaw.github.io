const MainLogo = (props: { size: string }) => {
  return (
    <div
      style={
        props.size === "big"
          ? {
              float: "left",
              margin: 16,
              padding: 16,
              width: 350
            }
          : {
              float: "left",
              margin: 16,
              padding: 16,
              width: 250
            }
      }
    >
      {props.size === "big" && (
        <p
          style={{
            color: "#6e6e6e",
            fontSize: "1.75rem",
            letterSpacing: "0.25em",
            textAlign: "center",
            verticalAlign: "middle",
            width: "100%",
            fontWeight: "bold"
          }}
        >
          SARA TUONONEN
        </p>
      )}
      {props.size === "medium" && (
        <p
          style={{
            color: "#6e6e6e",
            fontSize: "1.25rem",
            letterSpacing: "0.15em",
            textAlign: "center",
            verticalAlign: "middle",
            width: "100%",
            fontWeight: "bold"
          }}
        >
          SARA TUONONEN
        </p>
      )}
    </div>
  );
};

export default MainLogo;
