import { useWindowDimensions } from "../common";
import BurgerMenu from "../components/BurgerMenu";
import MenuBar from "../components/MenuBar";

function NoPage() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 767 ? <MenuBar transparent={true} /> : <BurgerMenu />}
    </div>
  );
}

export default NoPage;
