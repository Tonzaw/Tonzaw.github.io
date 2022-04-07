const MainLogo = (props: { size: string }) => {
  return (
    <div
      style={{
        flex: 1,
        margin: 16,
        padding: 16
      }}
    >
      {props.size === "big" && (
        <div>
          <p
            style={{
              color: "white",
              fontSize: "1.75rem",
              letterSpacing: "0.25em",
              textAlign: "center",
              verticalAlign: "middle",
              textShadow: "1px 1px 1px black"
            }}
          >
            SARA TUONONEN PHOTOGRAPHY
          </p>
        </div>
      )}
      {props.size === "medium" && (
        <div>
          <p
            style={{
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.15em",
              textAlign: "center",
              verticalAlign: "middle",
              textShadow: "1px 1px 1px black"
            }}
          >
            SARA TUONONEN PHOTOGRAPHY
          </p>
        </div>
      )}
    </div>
  );
};

export default MainLogo;
