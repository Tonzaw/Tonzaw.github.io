import "../css/App.css";
import MainLogo from "./MainLogo";
import MenuItem from "./MenuItem";
import { useWindowDimensions } from "../common";

const MenuBar = (props: { transparent: boolean }) => {
  const { width } = useWindowDimensions();
  let size = "big";
  if (width >= 1008) {
    size = "big";
  } else if (width < 1008 && width > 768) {
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
              zIndex: 999,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginBottom: 16
            }
          : {
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginBottom: 16
            }
      }
    >
      <div
        className="leftSideMenu"
        style={width > 1008 ? { width: 480 } : { width: 360 }}
      >
        <MenuItem name="MINUSTA" link="/about" size={size} side="left" />
        <MenuItem name="HINNASTO" link="/prices" size={size} side="left" />
        <MenuItem name="FAQ" link="/faq" size={size} side="left" />
      </div>
      <MainLogo size={size} />
      <div
        className="rightSideMenu"
        style={width > 1008 ? { width: 480 } : { width: 360 }}
      >
        <MenuItem name="KUVAUSEHDOT" link="/terms" size={size} side="right" />
        <MenuItem
          name="YHTEYSTIEDOT"
          link="/contact"
          size={size}
          side="right"
        />
      </div>
    </div>
  );
};

export default MenuBar;
