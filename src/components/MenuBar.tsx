import "../css/App.css";
import MainLogo from "./MainLogo";
import MenuItem from "./MenuItem";
import { useWindowDimensions } from "../common";

const MenuBar = () => {
  const { width } = useWindowDimensions();
  let size = "big";
  if (width > 1500) {
    size = "big";
  } else if (width <= 1500 && width > 900) {
    size = "medium";
  } else {
    size = "small";
  }
  return (
    <div
      style={{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: 60,
        zIndex: 999
      }}
    >
      <div
        className="leftSideMenu"
        style={{
          flex: 3,
          display: "flex",
          flexDirection: "row"
        }}
      >
        <MenuItem name="MINUSTA" link="contact" size={size} />
        <MenuItem name="YHTEYSTIEDOT" link="contact" size={size} />
        <MenuItem name="HINNASTO" link="contact" size={size} />
      </div>
      <MainLogo size={size} />
      <div
        className="rightSideMenu"
        style={{ flex: 3, display: "flex", flexDirection: "row" }}
      >
        <MenuItem name="USEIN KYSYTYT KYSYMYKSET" link="contact" size={size} />
        <MenuItem name="KUVAUSEHDOT" link="contact" size={size} />
        <MenuItem name="MUUTA" link="contact" size={size} />
      </div>
    </div>
  );
};

export default MenuBar;
