import MainLogo from "./MainLogo";
import MenuTitle from "./MenuTitle";

const MenuBar = () => {
  return (
    <div
      style={{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: 80
      }}
    >
      <MenuTitle />
      <MenuTitle />
      <MainLogo />
      <MenuTitle />
      <MenuTitle />
    </div>
  );
};

export default MenuBar;
