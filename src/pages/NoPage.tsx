import { useWindowDimensions } from "../common";
import BannerImage from "../components/BannerImage";
import BurgerMenu from "../components/BurgerMenu";
import MenuBar from "../components/MenuBar";

function NoPage() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <BannerImage image={require("../images/couples/couples20.jpg")} />
      <div className="container">
        <h2>Virheellinen osoite!</h2>
      </div>
    </div>
  );
}

export default NoPage;
