import { Link } from "react-router-dom";
import { useWindowDimensions } from "../common";
import BannerImage from "../components/BannerImage";
import MenuBar from "../components/MenuBar";
import StickyHeader from "../components/StickyHeader";

function NoPage() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 768 ? <MenuBar transparent={true} /> : <StickyHeader />}
      {width > 768 ? (
        <BannerImage image={require("../images/newborn/newborn1.jpg")} />
      ) : (
        <div style={{ position: "relative", paddingTop: 100 }}>
          <BannerImage image={require("../images/newborn/newborn1.jpg")} />
        </div>
      )}
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
