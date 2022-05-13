import { useWindowDimensions } from "../common";

const MainLogoSmall = () => {
  const { width } = useWindowDimensions();
  return (
    <div
      style={{
        float: "left",
        margin: 16,
        width: "auto",
        position: "absolute",
        zIndex: 998
      }}
    >
      <img
        src={require("../images/icons/sara-logo2.png")}
        alt=""
        style={
          width > 470
            ? { height: "auto", width: 150 }
            : { height: "auto", width: 90 }
        }
      />
    </div>
  );
};

export default MainLogoSmall;
