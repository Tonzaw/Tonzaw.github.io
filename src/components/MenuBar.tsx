import "../css/App.css";
import MainLogo from "./MainLogo";
import MenuItem from "./MenuItem";
import { useWindowDimensions } from "../common";

const MenuBar = (props: { transparent: boolean }) => {
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
      style={
        props.transparent
          ? {
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
              zIndex: 999,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              width: "100%"
            }
          : {
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
              zIndex: 999,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              width: "100%"
            }
      }
    >
      <div
        className="leftSideMenu"
        style={width > 1500 ? { width: 480 } : { width: 360 }}
      >
        <MenuItem name="MINUSTA" link="/contact" size={size} side="left" />
        <MenuItem name="YHTEYSTIEDOT" link="/contact" size={size} side="left" />
        <MenuItem name="HINNASTO" link="/contact" size={size} side="left" />
      </div>
      <MainLogo size={size} />
      <div
        className="rightSideMenu"
        style={width > 1500 ? { width: 480 } : { width: 360 }}
      >
        <MenuItem
          name="KYSYMYKSIÄ & VASTAUKSIA"
          link="/contact"
          size={size}
          side="right"
        />
        <MenuItem name="KUVAUSEHDOT" link="/contact" size={size} side="right" />
        <MenuItem name="MUUTA" link="/contact" size={size} side="right" />
      </div>
    </div>
  );
};

export default MenuBar;
