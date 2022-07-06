import BurgerMenu from "./BurgerMenu";
import MainLogoSmall from "./MainLogoSmall";

const StickyHeader = () => {
  return (
    <div
      style={{
        height: 100,
        background: "white",
        zIndex: 100,
        width: "100%",
        position: "fixed"
      }}
    >
      <MainLogoSmall />
      <BurgerMenu />
    </div>
  );
};

export default StickyHeader;
