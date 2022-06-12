import { useWindowDimensions } from "../common";
import BannerImage from "../components/BannerImage";
import BurgerMenu from "../components/BurgerMenu";
import Feedback from "../components/Feedback";
import Footer2 from "../components/Footer2";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function About() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <BannerImage image={require("../images/pets/pets17.jpg")} />
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
                      paddingRight: 24,
                      paddingLeft: 24
                    }
                  : {
                      paddingRight: 24,
                      paddingLeft: 24
                    }
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
                itsensä lempeämmin, on se sanoinkuvaamattoman palkitsevaa.
              </p>
              <p
                style={{
                  textAlign: "justify"
                }}
              >
                Mitä enemmän vuosia on vierinyt, olen alkanut paremmin
                ymmärtämään ohikiitävien hetkien arvon, ja sen kuinka kuviin
                investoimisesta kiittää itseään myöhemmin. Lopulta
                harrastuksesta alkoi muotoutua bisnes, ja yritykseni perustin
                keväällä 2021. Sen jälkeen olen päässyt kuvailemaan vähän
                kaikkea laidasta laitaan. Erityisen lähellä sydäntäni on
                erilaisten tunteiden ja tunnelmien taltioiminen kuviin.
              </p>
              <p
                style={{
                  textAlign: "justify"
                }}
              >
                Kuvaajana olen lempeä ja helposti lähestyttävä, eikä kuvauksia
                tarvitse yhtään jännittää. Ei tarvitse tietää, miten kameran
                edessä ollaan, minä autan ja ohjaan. Yritykseni arvoja ohjaavat
                luotettavuus, yhdenvertaisuus ja turvallisuus. Mikäli tyylini
                puhuttelee sinua, ota rohkeasti yhteyttä niin suunnitellaan
                kuvaus juuri sinun tarpeillesi!
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
                src={require("../images/sara.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: 34 }}>ASIAKKAIDEN KOKEMUKSIA</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <Feedback
            feedback="Etsimme kuvaajaa, jonka näkemys ja tyyli kohtaisi omamme ja
              löysimme Saran instagramin kautta. Hänen kanssa oli enemmän kuin
              miellyttävää asioida, vastaukset saimme kysymyksiin nopeasti ja
              ideoita löytyi. Itse h-hetkenä valokuvaus hoitui sulavasti ja
              vahvalla ammattitaidolla. Valmiit kuvat saimme nopeasti ja ne
              olivat täynnä raikkautta ja luonnollisuutta - juuri sitä mitä
              kuvilta toivoimme! Lämpimästi voin suositella Saraa kuvaamaan omat
              tärkeät hetkesi. Uusia kuvauksia odottaen."
            name="Sanni"
          />
          <Feedback
            feedback="Saran kuvattavana kamera unohtui. Koin kuvaushetken
            kiireettömänä, vapauttavana, rentona ja miellyttävänä,
            hauskanakin! Oma epävarmuus ja vaivautuneisuus ajatuksesta olla
            kuvassa haihtui. Kokemus oli itselleni terapeuttinen, ensi kertaa
            katson omaa kuvaa hymyillen, itsevarmempana ja itsestäni pitäen ja
            iloiten! Kiitos Sara!"
            name="Tiina"
          />
          <Feedback
            feedback="The pictures are absolutely stunning! I love love love love how
            you captured so well the essence of our kids. I'm completely in
            love with your pictures and I can't wait to have a new photoshoot
            with you. I must say once more that you are super talented Sara!
            You have the charisma and the eye for photography. I was planning
            on having like 5 pictures from this session, but I have picked 38!
            And only after having a through selection process."
            name="Vanessa"
          />
          <Feedback
            feedback="Sun kanssa kuvien ottaminen tuntu tosi luonnolliselta eikä
            tarvinnu jännittää yhtään! Olit tosi hyvä myös ideoimaan, millasia
            kuvia otetaan."
            name="Rebecca"
          />
          <Feedback
            feedback="Pariskuntakuvauksessa meillä oli tosi iloinen ja rento tunnelma,
            ei tarvinnut jännittää yhtään. Saatiin kauniit kuvat ja ihanat
            muistot."
            name="Anita"
          />

          <Feedback
            feedback="Kuvausjännitys laukesi heti kun pääsi Saran kameran taakse, kuvattavana oleminen alkoikin tuntua luontevalta ja mukavalta."
            name="Susanna"
          />

          <Feedback
            feedback="Saran kanssa kuvailu oli tosi luonnollista ja teki itselle rennon fiiliksen, joka tallentui myös kuviin. Tuli olo pyytää Saraa uudelleen kuvaamaan. Laadukkaiden kuvien lisäksi kuvien käsittely sai kuvat näyttämään tosi ammattimaisilta."
            name="Kehonhuolto Anna Savolainen"
          />
          <Feedback
            feedback="Sara on aivan mahtava valokuvaaja ja hänen seurassaan pystyy rentoutumaan aivan täysin, jopa tällainen kameraa karkaileva ihminen. Osaa huomioida toiveet, mutta oma visuaalinen näkemys ei myöskään puutu. Saat satavarmasti onnistuneita kuvia."
            name="CAMA sportswear"
          />

          <Feedback
            feedback="Saran kanssa newborn-kuvaus sujui rauhallisissa merkeissä, vauvantahtisesti. Saralla oli paljon omia, ihania ideoita kuvien suhteen, mutta hän kuunteli myös meidän näkemyksiämme ja toiveitamme. Kuvista tuli aivan valtavan ihania! Suosittelen Saraa todella lämpimästi!"
            name="Mimmi"
          />
          <Feedback
            feedback="Olen ollut Saran kuvattavana paljon erilaisissa kuvausympäristöissä ja kerta toisensa jälkeen kuvat ovat olleet upeita. Saran edessä kuvattavana on helppoa ja rentoa olla. Hän osaa hyvin käyttää omaa taiteellista silmäänsä ja luoda kauniita kuvia."
            name="Emilia"
          />
          <Feedback
            feedback="Saran kanssa kuvaus sujui erittäin luontevasti! Hän oli samalla huomaamaton, mutta osaa myös ammattimaisesti ohjata malliaan. Tunnelma oli rento, eikä aikataululla luoda painetta. Annan ison suosituksen hänelle. Hevoskuvaus sujui todella hyvin ja sain toteutetuksi toivomani."
            name="Nana"
          />
          <Feedback
            feedback="Ollaan iloisia miten hyviä kuvia saatiin! Puhuttiin että tästä pitää kyllä tehdä sellanen vähintään kerran vuodessa juttu! Niin parasta kun saa oikeesti hyviä kuvia talteen."
            name="Oona"
          />
          <Feedback
            feedback="Boudoir-kuvaukset tuntuivat etukäteen jännittävältä ja hieman vaivaannuttavaltakin ajatukselta, mutta Saran valokuvattavana oma epävarmuus väistyi hetkessä ja tilalle tuli hyvin itsevarma ja luonteva olo kameran edessä. Kuvaussessio oli hyvin hauska ja voimaannuttava kokemus, jonka aikana tunnelma oli hyvin rento ja vapautunut. Saran ottamista kuvista tuli lopulta todella upeita, jotka kohottivat myös omaa itsetuntoa ja saivat todella arvostamaan omaa rakasta kehoa!"
            name="Heidi"
          />
          <Feedback
            feedback="Aivan mahtavaa! Kuvista tuli kyllä niin upeita, kiitos sulle. Ihmeessä otan yhteyttä jatkossakin, jos tulee mieleen, mitä kuvata. Suosittelen myös tutuille, jos etsivät kuvaajaa."
            name="Katri"
          />
          <Feedback
            feedback="Kuvauksessa oli hyvin vapautunut ja positiivinen tunnelma. Ihanaa kun kuvaaja oli itse myös hyvin innostunut ja aikataulukin joustava. Lopputulos aivan priimaa. Kaikki toimi niin kuin sovittiin. Lämmin suositus!"
            name="Nina"
          />
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default About;
