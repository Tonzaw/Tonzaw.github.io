import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useWindowDimensions } from "../common";
import BannerImage from "../components/BannerImage";
import BurgerMenu from "../components/BurgerMenu";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function Prices() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <BannerImage image={require("../images/banner-prices.jpg")} />
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
          varatessa laskutan sinulta kuvausmaksun, joka toimii
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
        <div>
          <h2>KUVAUKSET</h2>
          <p>
            Löydät ottamiani kuvia etusivun{" "}
            <HashLink to={"/#portfolio"}>portfolio</HashLink> osiosta!
          </p>
          <h3>PARISKUNNAT</h3>
          <p>
            Viekö alkuhuuma yhä jalat alta, vai oletko kenties kulkenut jo
            vuosia rakkaasi rinnalla? On ihanaa saada kumppanin kanssa kuvia eri
            elämäntilanteista, joihin voi aina palata myöhemmin. Kuvilla voi
            myös vaikkapa sisustaa kodin seiniä tai hyödyntää esimerkiksi
            puhelimen taustakuvana. Ikuistan teille kihlajaiset, vuosipäivät ja
            muut tärkeät hetket. Ette kuitenkaan tarvitse mitään erityistä
            merkkipäivää tullaksenne kuvattavaksi. Lähdetään yhdessä taltioimaan
            juuri teidän välistä läsnäoloa, kommunikaatiota ja aitoja tunteita.
            Kameran edessä ei tarvitse osata olla, minä ohjaan ja ideoin
            kanssanne. Pönöttää ei tarvitse!
          </p>
          <h3>LAPSET & PERHEET</h3>
          <p>
            Tuntuuko aika kiitävän liian nopeasti lapsiperhearjen pyöriessä?
            Suosittelen investoimaan säännöllisesti perhekuvauksiin mikäli
            mahdollista, sillä lapset ovat pieniä vain kerran. Lähdetään yhdessä
            vaikka rantaan kävelylle. Leikitään, jutskaillaan, tutkitaan luontoa
            ja pidetään hauskaa yhdessä. Ja ainiin, otetaan kuvia samalla!
            Kuvauksiin tuleminen ei tarvitse tuntua siltä, että pitäisi vain
            poseerata ja hymyillä perhepotretteja varten. Haluan, että kuvista
            tulee elämänmakuisia ja juuri teidän näköisiänne.
          </p>
          <h3>ODOTUS</h3>
          <p>
            Odotuskuvauksissa ikuistetaan erityinen ja jännittävä hetki
            elämässä, kun odotetaan uuden elämänvaiheen alkamista. Vielä
            vatsassa asusteleva pieni ihme mullistaa maailmanne ja tuo niin
            paljon lisää rakkautta. Odotuskuvauksissa korostuu lasta kantava
            osapuoli ja raskausvatsa, mutta kumppani ja lapset ovat myös
            tervetulleita kuviin. Ps. Kysy tarjousta odotus +
            newborn-kuvauspaketista!
          </p>
          <h3>BOUDOIR</h3>
          <p>
            Haluaisitko hemmotella itseäsi ja vaikka kumppaniasi sensuelleilla
            kuvilla? Boudoir-kuvaus on hetki juuri sinulle. Kumppanin saa myös
            ottaa toki mukaan kuviin! Kuvauksissa voidaan käyttää hyödyksi niin
            arkista kotiympäristöä kuin myös ulkomiljöötä toiveiden mukaan. Itse
            määrittelet sen, mikä tuntuu kuvauksissa luontevalta ja mikä saa
            olosi voimaantuneeksi ja upeaksi. Kuvaukseen tullakseen ei tarvitse
            olla täydellisen sinut tai varma itsestään. Tavoitteeni on saada
            sinut näkemään itsesi uusin silmin ja lempeydellä. Olet täydellinen
            juuri sellaisena kun nyt olet!
          </p>
          <h3>HENKILÖKUVAT</h3>
          <p>
            Ylioppilaskuvaus, rippikuvaus, valmistumiskuvaus... hoituu! Vai
            haaveiletko kenties uusista profiilikuvista somekanaviisi tai
            edustavasta kuvasta CV:hen? Tai haluaisitko yksinkertaisesti
            fiilistellä itseäsi kuvausten merkeissä muuten vaan? Let's go!
          </p>
          <h3>VASTASYNTYNEET</h3>
          <p>
            Vastasyntyneen kuvaus eli newborn-kuvaus toteutetaan kahden viikon
            sisällä vauvan syntymästä. Tällöin vauva nukkuu paljon, ja hänet on
            helppo asetella ja kapaloida kuvia varten. Aika kiitää vauvakuplassa
            kuin silmää räpäyttäen, joten varaathan kuvausajan riittävän
            ajoissa, jotta saadaan nämä hennon hauraat ja vauvantuoksuiset
            hetket ikuisesti tallennettua. Tuon kuvauksiin erilaisia koreja,
            vilttejä, lämpöpuhaltimen sekä muuta rekvisiittaa mitä voidaan
            hyödyntää. Kuvaus etenee vauvantahtisesti, joten aikaa varataan
            ainakin n. kaksi tuntia. Muu perhe on tervetulleita osallistumaan
            myös kuviin!
          </p>
          <h3>YRITYKSILLE</h3>
          <p>
            Kaipaako nettisivusi uutta visuaalista ilmettä? Haluatko raikastaa
            yrityksesi sosiaalisen median kanavia uusin kuvin? Kuvaajan tekemät
            kuvat tuovat ammattimaisemman tuntuman brändillesi. Ota yhteyttä,
            niin suunnitellaan yhdessä kuvaukset, jotka palvelevat parhaiten
            juuri sinua markkinoinnissasi.
          </p>
          <h3>LEMMIKIT</h3>
          <p>
            Lemmikit ovat perheenjäseniä siinä missä muutkin. Hevoskuvaus sekä
            koirakuvaus on minulle ennestään tuttua, mutta mikäli haluat
            kuvauttaa kissasi, marsusi, papukaijasi, liskosi, tai vaikkapa
            kilpikonnasi, niin ota rohkeasti yhteyttä! Etenkin eläimen
            pentuvaihe on otollinen aika saada suloisia kuvia.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Prices;
