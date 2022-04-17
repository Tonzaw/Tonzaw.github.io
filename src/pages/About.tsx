import { useWindowDimensions } from "../common";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function About() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <MenuBar transparent={false} />
      <div
        className="container"
        style={{
          height: "auto",
          marginBottom: 64
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={
              width > 1008
                ? {
                    width: "50%",
                    height: "auto"
                  }
                : {
                    width: "100%",
                    height: "auto"
                  }
            }
          >
            <div
              style={
                width > 1008
                  ? {
                      paddingRight: 12
                    }
                  : {}
              }
            >
              <h2>KUKA OLEN?</h2>
              <p
                style={{
                  textAlign: "justify"
                }}
              >
                Ihanaa kun löysit sivuilleni! Sara Tuononen Photographyn takaa
                löytyy helposti kaikesta innostuva, empaattinen sekä työlleen
                omistautunut kuvailija. Olen jo vuosia työskennellyt
                opetusalalla lasten parissa, jonka koen antaneen minulle vahvat
                vuorovaikutustaidot. Kuvaamisessa parasta on tavata erilaisia
                persoonia ja päästä taltioimaan heidän tarinansa kuvan keinoin.
                Taiteen ja itseilmaisun eri muodot ovat olleet vahvasti osa
                elämääni lapsesta saakka. Kuvaaminen tempaisi mukaansa jo
                teininä kavereita kuvaillessa. Palo roihahti yhä enemmän, kun
                huomasin miten iso merkitys kuvilla voi toiselle olla. Jos
                pystyn kohottamaan jonkun itsetuntoa, tai auttamaan näkemään
                itsensä lempeämmin, on se sanoinkuvaamattoman palkitsevaa. Mitä
                enemmän vuosia on vierinyt, olen alkanut paremmin ymmärtämään
                ohikiitävien hetkien arvon, ja sen kuinka kuviin investoimisesta
                kiittää itseään myöhemmin. Lopulta harrastuksesta alkoi
                muotoutua bisnes, ja yritykseni perustin keväällä 2021. Sen
                jälkeen olen päässyt kuvailemaan vähän kaikkea laidasta laitaan.
                Erityisen lähellä sydäntäni on erilaisten tunteiden ja
                tunnelmien taltioiminen kuviin. Kuvaajana olen lempeä ja
                helposti lähestyttävä, eikä kuvauksia tarvitse yhtään jännittää.
                Ei tarvitse tietää, miten kameran edessä ollaan, minä autan ja
                ohjaan. Yritykseni arvoja ohjaavat luotettavuus, yhdenvertaisuus
                ja turvallisuus. Mikäli tyylini puhuttelee sinua, ota rohkeasti
                yhteyttä niin suunnitellaan kuvaus juuri sinun tarpeillesi!
              </p>
            </div>
          </div>
          <div
            style={
              width > 1008
                ? {
                    width: "50%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center"
                  }
                : {
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center"
                  }
            }
          >
            <div style={width > 1008 ? { paddingLeft: 12 } : {}}>
              <img
                style={{
                  width: "100%"
                }}
                src={require("../images/couples/couples2.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: 24, marginBottom: 12 }}>ASIAKASPALAUTTEET</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <div
            className="feedbackDiv"
            style={
              width > 1008
                ? {
                    width: "50%"
                  }
                : {
                    width: "100%"
                  }
            }
          >
            <p
              className="feedback"
              style={{ fontStyle: "italic", textAlign: "center" }}
            >
              "Etsimme kuvaajaa, jonka näkemys ja tyyli kohtaisi omamme ja
              löysimme Saran instagramin kautta. Hänen kanssa oli enemmän kuin
              miellyttävää asioida, vastaukset saimme kysymyksiin nopeasti ja
              ideoita löytyi. Itse h-hetkenä valokuvaus hoitui sulavasti ja
              vahvalla ammattitaidolla. Valmiit kuvat saimme nopeasti ja ne
              olivat täynnä raikkautta ja luonnollisuutta - juuri sitä mitä
              kuvilta toivoimme! Lämpimästi voin suositella Saraa kuvaamaan omat
              tärkeät hetkesi. Uusia kuvauksia odottaen."
            </p>
            <p style={{ textAlign: "center" }}>-Sanni</p>
          </div>
          <div
            style={
              width > 1008
                ? {
                    width: "50%"
                  }
                : {
                    width: "100%"
                  }
            }
          >
            <p
              className="feedback"
              style={{ fontStyle: "italic", textAlign: "center" }}
            >
              "Saran kuvattavana kamera unohtui. Koin kuvaushetken
              kiireettömänä, vapauttavana, rentona ja miellyttävänä,
              hauskanakin! Oma epävarmuus ja vaivautuneisuus ajatuksesta olla
              kuvassa haihtui. Kokemus oli itselleni terapeuttinen, ensi kertaa
              katson omaa kuvaa hymyillen, itsevarmempana ja itsestäni pitäen ja
              iloiten! Kiitos Sara!"
            </p>
            <p style={{ textAlign: "center" }}>-Tiina</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
