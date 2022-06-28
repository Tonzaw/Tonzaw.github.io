import { Link } from "react-router-dom";
import { useWindowDimensions } from "../common";
import BannerImage from "../components/BannerImage";
import BurgerMenu from "../components/BurgerMenu";
import MenuBar from "../components/MenuBar";

function NoPage() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <BannerImage image={require("../images/newborn/newborn1.jpg")} />
      <div className="container">
        <Link
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            textDecoration: "none",
            width: "100%"
          }}
          to={"/"}
        >
          <h2
            style={{
              marginTop: 80
            }}
          >
            Virheellinen osoite, palaa etusivulle!
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
