import Footer2 from "../components/Footer2";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function Terms() {
  return (
    <div className="page">
      <MenuBar transparent={true} />
      <img
        src={require("../images/boudoir/boudoir9.jpg")}
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
        <h2 style={{ marginTop: 24 }}>KUVAUSEHDOT</h2>
        <p>Varaamalla kuvauksen hyväksyt kuvausehdot.</p>
        <p>
          Kaikki hinnat sisältävät kuvauspäivänä voimassa olevan arvonlisäveron
          (vuonna 2022 arvonlisäveron osuus 24%). Kuvat voi ladata omalle
          koneelle suurimmassa mahdollisessa koossa nettilinkin kautta.
          RAW-kuvia ei luovuteta, vaan kuvaaja valitsee omalla ammattitaidollaan
          teknisesti onnistuneet ja parhaat jotka luovutetaan asiakkaalle
          JPG-muodossa.
        </p>
        <p>
          Kaikki tekijänoikeudet säilyvät Valokuvaaja Sara Tuonosella ja hän saa
          käyttää kuvia portfoliossaan, blogissaan sekä muussa markkinoinnissa
          ilman erillistä lupaa ellei toisin sovita.
        </p>
        <p>
          Asiakas saa maailmanlaajuisen, ikuisen, ei kaupallisen lisenssin
          toimitettuihin kuviin, joka periytyy asiakkaan jälkipolville. Asiakas
          saa julkaista kuvia somessa, teettää paperikuvia ja muita fyysisiä
          tuotteita missä tahansa ei kaupallisessa tarkoituksessa. Kaupalliseen
          tarkoitukseen pitää neuvotella erillinen sopimus.
        </p>
        <p>
          Asiakas on nähnyt Valokuvaaja Sara Tuonosen aiempia töitä, mutta
          hyväksyy sen, että kuvaustyyli voi muuttua ajan myötä tai olosuhteiden
          takia. Valokuvaaja Sara Tuononen ei takaa, että kuvat ovat tyyliltään
          samanlaisia kuin aiemmat kuvat. Valokuvaaja Sara Tuononen päättää
          kuvien taiteellisen tyylin vallitsevien olosuhteiden mukaan oman
          harkintansa mukaisesti. Toimitettavien kuvien valinta on täysin
          Valokuvaaja Sara Tuonosen harkinnassa. Kuvat toimitetaan JPG
          -formaatissa, kuvien raakatiedostoja ei toimiteta. Asiakkaalla ei ole
          oikeutta nähdä kaikkia päivänä otettuja kuvia, jos ne eivät
          Valokuvaaja Sara Tuonosen näkemyksen mukaan ole tarpeeksi hyviä
          teknisesti tai taiteellisesti.
        </p>
        <p>
          Kuvauspaketeissa on sekä mustavalkoisia että värillisiä kuvia.
          Asiakkaalla ei ole lupaa muokata kuvia jälkikäteen millään tavalla.
        </p>
        <p>SÄILYTYS:</p>
        <p>
          Valokuvaaja Sara Tuononen ei ole korvausvelvollinen, jos jotain
          tiettyä tapahtumaa ei ole ikuistettu. Jos kuvat tuhoutuvat kokonaan
          tai osittain Valokuvaaja Sara Tuonosesta riippumattomasta syystä kuten
          laiterikko, Valokuvaaja Sara Tuononen on velvollinen huolehtimaan
          kuvien huolellisesta varmuuskopioinnista. Varmuuskopiointivelvollisuus
          päättyy 6kk häiden jälkeen, eikä Valokuvaaja Sara Tuonosella ole sen
          jälkeen mitään velvollisuutta säilyttää asiakkaan kuvia.
        </p>
        <p>
          Kaikissa kuvauksissa on käytössä varausmaksu joka tunnetaan myös
          kuvausmaksuna.
        </p>
        <p>
          Kuvien toimitus tapahtuu noin 3-6 viikon kuluessa, riippuen
          sesonkikiireistä.
        </p>
        <p>Juhlapyhien lisä (juhannus, joulu ja uusivuosi) +30%</p>
        <p>PERUUTUS:</p>
        <p>
          Alle 24h peruututetuista ajoista Valokuvaaja Sara Tuonosella on oikeus
          periä täysi maksu kuvauksesta.
        </p>
      </div>
      <Footer2 />
    </div>
  );
}

export default Terms;
