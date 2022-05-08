import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { primaryColor, secondaryColor } from "../styles/colors";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: primaryColor
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "26px",
    width: "26px",
    right: "24px",
    top: "24px"
  },
  bmCross: {},
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: primaryColor,
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: primaryColor
  },
  bmItemList: {},
  bmItem: {
    height: "100%"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

function BurgerMenu() {
  return (
    <Menu
      right
      styles={styles}
      customCrossIcon={
        <img
          src={require("../images/icons/close.png")}
          alt=""
          style={{ height: 26, width: 26 }}
        />
      }
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            paddingTop: 100,
            display: "flex",
            flexDirection: "column",
            flex: 1
          }}
        >
          <Link
            className="burgerMenuItem"
            style={{
              color: secondaryColor,
              fontSize: "1.15rem",
              letterSpacing: "0.15em",
              textAlign: "center",
              verticalAlign: "middle",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "Roboto-Bold",
              width: "100%",
              marginBottom: 24
            }}
            to={"/"}
          >
            {"ETUSIVU"}
          </Link>
          <Link
            className="burgerMenuItem"
            style={{
              color: secondaryColor,
              fontSize: "1.15rem",
              letterSpacing: "0.15em",
              textAlign: "center",
              verticalAlign: "middle",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "Roboto-Bold",
              width: "100%",
              marginBottom: 24
            }}
            to={"/about"}
          >
            {"MINUSTA"}
          </Link>
          <Link
            className="burgerMenuItem"
            style={{
              color: secondaryColor,
              fontSize: "1.15rem",
              letterSpacing: "0.15em",
              textAlign: "center",
              verticalAlign: "middle",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "Roboto-Bold",
              width: "100%",
              marginBottom: 24
            }}
            to={"/prices"}
          >
            {"HINNASTO"}
          </Link>
          <Link
            className="burgerMenuItem"
            style={{
              color: secondaryColor,
              fontSize: "1.15rem",
              letterSpacing: "0.15em",
              textAlign: "center",
              verticalAlign: "middle",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "Roboto-Bold",
              width: "100%",
              marginBottom: 24
            }}
            to={"/faq"}
          >
            {"FAQ"}
          </Link>
          <Link
            className="burgerMenuItem"
            style={{
              color: secondaryColor,
              fontSize: "1.15rem",
              letterSpacing: "0.15em",
              textAlign: "center",
              verticalAlign: "middle",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "Roboto-Bold",
              width: "100%",
              marginBottom: 24
            }}
            to={"/terms"}
          >
            {"KUVAUSEHDOT"}
          </Link>
          <Link
            className="burgerMenuItem"
            style={{
              color: secondaryColor,
              fontSize: "1.15rem",
              letterSpacing: "0.15em",
              textAlign: "center",
              verticalAlign: "middle",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "Roboto-Bold",
              width: "100%"
            }}
            to={"/contact"}
          >
            {"YHTEYSTIEDOT"}
          </Link>
        </div>
        <div style={{ height: "100%", display: "flex", flex: 1 }}>
          <p
            style={{
              color: secondaryColor,
              fontSize: 12,
              flex: 1,
              alignSelf: "flex-end",
              textAlign: "center"
            }}
          >
            © 2022 Sara Tuononen
          </p>
        </div>
      </div>
    </Menu>
  );
}

export default BurgerMenu;
