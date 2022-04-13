const PortfolioRow = (props: { leftImage: string; rightImage: string }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          flex: 1,
          width: "100%",
          height: "auto"
        }}
      >
        <img
          style={{
            width: "100%"
          }}
          src={props.leftImage}
          alt=""
        />
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          height: "auto",
          paddingLeft: 10
        }}
      >
        <img
          style={{
            width: "100%"
          }}
          src={props.rightImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default PortfolioRow;
