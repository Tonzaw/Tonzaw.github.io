import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function Prices() {
  return (
    <div className="page">
      <MenuBar transparent={true} />
      <img
        src={require("../images/couples/couples18.jpg")}
        alt=""
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover"
        }}
      />
      <div
        className="container"
        style={{
          height: "auto",
          marginBottom: 64
        }}
      >
        <h2 style={{ marginTop: 24 }}>HINNASTO</h2>
        <p>
          Alla oleva hinnasto käsittää kaikki portfoliostani löytyvät
          kuvausvaihtoehdot. Mikäli toivomaasi kuvausta ei löydy tarjonnastani,
          kysythän siitä erikseen minulta. Tapahtumat ja tilaisuudet
          hinnoitellaan aina yksilöllisesti asiakkaan tarpeiden mukaan. Kuvausta
          varatessa laskutan sinulta kuvausmaksun osuuden, joka toimii
          varausvahvistuksena ja kuvausehtojeni hyväksymisenä. Luethan
          kuvausehtosopimukseni{" "}
          <Link className="link" to={"/terms"}>
            täältä
          </Link>{" "}
          ennen kuvauksen varaamista. Kuvausmaksu sisältää kuvauksen
          suunnittelun, tunnin kuvausajan (newborn-kuvaus 2 tuntia) sekä
          esivalintagallerian. Kuvapaketti ostetaan erikseen kuvauksen jälkeen.
        </p>
        <div
          style={{
            width: "auto",
            maxWidth: 380,
            height: "auto",
            margin: "auto",
            borderRadius: 4,
            background: "#F6F4F2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 24
          }}
        >
          <div
            style={{
              fontSize: 18,
              padding: 32
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              ENNEN KUVAUSTA:
            </p>
            <p
              style={{
                textAlign: "center"
              }}
            >
              KUVAUSMAKSU 100€
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              KUVAUKSEN JÄLKEEN:
            </p>
            <p
              style={{
                textAlign: "center"
              }}
            >
              10 KUVAA 50€
            </p>
            <p
              style={{
                textAlign: "center"
              }}
            >
              20 KUVAA 80€
            </p>
            <p
              style={{
                textAlign: "center"
              }}
            >
              KOKO GALLERIA 120€
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: 14
              }}
            >
              (Kaikki hinnat sisältävät alv. 24%.)
            </p>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <input type="submit" value="VARAA NYT" className="formInput" />
            </Link>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Prices;
