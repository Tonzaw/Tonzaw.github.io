import { useWindowDimensions } from "../common";
import BannerImage from "../components/BannerImage";
import BurgerMenu from "../components/BurgerMenu";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function Terms() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <BannerImage image={require("../images/banner-terms.jpg")} />
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
          Näissä sopimusehdoissa valokuvaajalla viitataan henkilöön Sara
          Tuononen ja asiakkaalla valokuvauspalvelun tilaajaan.
        </p>
        <p style={{ fontWeight: "bold" }}>Sopimuksen hyväksyminen</p>
        <p>
          Asiakas perehtyy sopimusehtoihin ennen sovittua kuvausajankohtaa.
          Ostamalla valokuvaajan palveluita, asiakas sitoutuu noudattamaan näitä
          sopimusehtoja. Myös valokuvaaja sitoutuu noudattamaan alla olevia
          ehtoja asiakkaansa kanssa.
        </p>
        <p style={{ fontWeight: "bold" }}>Varaukset</p>
        <p>
          Valokuvauksen varaus on sitova sitten, kun asiakas on maksanut
          kuvausmaksun ja valokuvaaja on lähettänyt asiakkaalle kirjallisen
          vahvistusviestin sähköpostitse. Vahvistusviesti sisältää tiedot
          yhdessä asiakkaan kanssa sovitusta kuvauksen sisällöstä ja sen
          ajankohdasta. Kuvausmaksu tulee olla maksettuna ennen kuvausta.
          Maksamalla kuvausmaksun hyväksyt nämä sopimusehdot.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Koevedosgalleria ja valmiiden kuvien toimittaminen
        </p>
        <p>
          Kuvausten jälkeen kuvaaja kokoaa valitsemistaan onnistuneista
          otoksista katseltavaksi koevedosgallerian, josta asiakas valitsee
          haluamansa kuvapaketin. Asiakkaalla ei ole oikeutta kopioida tai
          ladata vedosgallerian kuvia omaan käyttöön tai julkaista niitä.
          Kuvaaja käy asiakkaan valitsemat kuvat läpi peruskäsittelyn
          valotuksen, valkotasapainon, kontrastin ja rajauksen osalta. Tarkempi
          kuvien käsittely ja kuvamanipulaatio (esimerkiksi ihon tasoittaminen
          tai esineiden poistaminen kuvasta) eivät automaattisesti kuulu
          palveluun ilman lisämaksua. Koevedosgalleria toimitetaan asiakkaan
          nähtäväksi viikon sisällä kuvauksista. Asiakas on velvollinen
          valitsemaan itselleen kuvapaketin viikon sisällä gallerialinkin
          vastaanotettuaan. Koevedosgalleria poistetaan asiakkaan valittua
          kuvat, ellei toisin sovita.<br></br>Valmiit kuvat toimitetaan
          asiakkaalle digitaalisessa muodossa linkin kautta täysikokoisina
          jpg.-tiedostoina. Raw-tiedostoja eli kuvien raakaversioita ei
          toimiteta. Käsiteltyjen kuvien toimitusaika on riippuvainen asiakkaan
          valitsemien kuvien määrästä. Kun kuvapaketin maksu näkyy kuvaajan
          tilillä, toimitetaan asiakkaalle valmiit kuvat 1-3 viikon sisällä,
          ellei toisin sovita.
        </p>
        <p style={{ fontWeight: "bold" }}>Maksu</p>
        <p>
          Kuvausmaksu maksetaan aina ennen kuvausta, joka toimii ns.
          varausmaksuna. Lasku lähetetään asiakkaalle sähköpostiin. Kun asiakas
          on kuvausten jälkeen valinnut ja maksanut haluamansa kuvapaketin,
          toimitetaan valmiit kuvat asiakkaalle. Mikäli asiakas ei ole maksanut
          laskua eräpäivään mennessä, ei valokuvaajalla ole velvollisuutta
          toimittaa valmiita kuvia asiakkaalle. Kuvaaja ilmoittaa asiakkaalle
          tarjoamiensa kuvauspalveluiden kokonaishinnan sopimuksen laatimisen
          yhteydessä. Mikäli kuvaajalle aiheutuu yllättäviä kuluja
          kuvaustilanteessa, joista ei ole aiemmin sovittu (esim. lauttamaksut,
          sisäänpääsymaksut tai parkkimaksut) vastaa asiakas näistä
          ylimääräisistä kustannuksista.<br></br>Mikäli kuvaus tapahtuu Turun
          seudulla, sisältyvät matkakustannukset kuvausmaksuun. Jos kuvaaja
          joutuu matkustamaan kuvauspaikalle yli 40km, tulee asiakkaan maksaa
          erikseen matkakuluista.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Kuvaustyyli, laitteisto ja kuvien mahdollinen tuhoutuminen
        </p>
        <p>
          Asiakas on nähnyt kuvaajan aiempia töitä, joten asiakas luottaa
          kuvaajan taitotasoon ja visioon kuvata. Asiakas ymmärtää ja hyväksyy
          sen, että kuvaajan kuvaustyyli voi muuttua ajan myötä ja/tai
          olosuhteiden takia. Kuvaaja ei takaa, että toimitettavat kuvat ovat
          samanlaisia/identtisiä tyyliltään kuin hänen aikaisemmat kuvansa.
          Kuvaaja päättää kuvien taiteellisen tyylin vallitsevien olosuhteiden
          ja oman harkintansa mukaisesti. Esivalintagalleria sisältää
          valokuvaajan harkinnan mukaan usein myös mustavalkokuvia. Jotkut kuvat
          on valittavina vain mustavalkoversioina tai vain väriversioina tai
          molempina. Suurin osa galleriastan kuvista on kuitenkin värillisiä.
          Epätodennäköisessä tilanteessa, jossa kuvat tuhoutuvat (esim.
          laiterikko), kuvaaja on velvollinen vahingonkorvauksiin palauttamalla
          korkeintaan asiakkaan siihen mennessä maksaman rahamäärän takaisin.
          Kuvaaja on velvollinen tarjoamaan vastaavan maksuttoman kuvauksen
          asiakkaalle, mikäli hänen kuvansa tuhoutuvat. Kuvaaja on velvollinen
          huolehtimaan kuvien huolellisesta varmuuskopioinnista.<br></br>
          Varmuuskopiointivelvollisuus päättyy 3kk kuvauksen jälkeen, eikä
          kuvaajalla ole sen jälkeen enää velvollisuutta säilyttää asiakkaan
          kuvia.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Tekijänoikeus ja kuvien käyttöoikeus
        </p>
        <p>
          Asiakkaalla on oikeus julkaista valokuvaajan ottamia valmiita kuvia
          omilla sosiaalisen median alustoillaan sekä teettää valokuvista
          kopioita yksityiseen sekä lähipiirinsä käyttöön.<br></br>Asiakkaalla
          ei ole oikeutta myydä tai luovuttaa kuvia kolmannelle osapuolelle
          ilman valokuvaajan lupaa. Asiakkaalla ei ole lupaa muokata tai rajata
          kuvia ilman kuvaajan lupaa. Asiakkaan julkaistessa valokuvaajan
          ottamia kuvia, tulee valokuvaajan nimi Sara Tuononen Photography
          (instagramissa:{" "}
          <a
            href="https://instagram.com/saratuononen_photography"
            target="_blank"
            rel="noreferrer"
          >
            @saratuononen_photography
          </a>
          ) merkitä julkaisuun.
        </p>
        <p>
          Kuvaajalla on yksinomainen oikeus omiin kuviinsa, niiden käyttöön,
          julkaisemiseen ja myymiseen. Kuvaaja voi julkaista kuviaan vapaasti
          sosiaalisessa mediassa, ellei toisin sovita. Asiakkaalla on oikeus
          pyytää, ettei hänestä otettuja tunnistettavia kuvia julkaista tai
          käytetä julkisesti, jolloin kuvaaja kunnioittaa tätä toivetta.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Erimielisyydet ja sopimuksen purkaminen
        </p>
        <p>
          Mikäli asiakkuuden aikana herää erimielisyyksiä, kyseisistä asioista
          neuvotellaan ensisijaisesti asiakkaan ja valokuvaajan välillä
          rakentavalla ja kaikkia osapuolia kunnioittavalla tavalla.<br></br>
          Asiakkaalla on oikeus perua kuvaus 24h ennen kuvausta. Mikäli asiakas
          peruu kuvauksen alle 24h ennen kuvausta, ei kuvaajalla ole
          velvollisuutta palauttaa kuvausmaksua. Juhlien ja tapahtumien
          varausmaksu on 30% kokonaissummasta, jota ei palauteta, vaikka asiakas
          peruisi kuvauksen. Myös valokuvaajalla on oikeus purkaa sopimus,
          jolloin hänen tulee antaa asiakkaalle selitys sopimuksen purkamiseen
          johtaneista syistä sekä palauttaa mahdolliset varausmaksut.<br></br>
          Valokuvaaja ei ole velvoitettu maksamaan asiakkaalle ylimääräisiä
          vahingonkorvauksia (varausmaksujen palauttamisen lisäksi), jos hän ei
          ylitsepääsemättömän esteen (esimerkiksi sairastumisen,
          loukkaantumisen, kuoleman tai muun ennakoimattoman tilanteen) vuoksi
          kykene fyysisesti saapumaan kuvauspaikalle sovittuna ajankohtana.
          Mikäli kuvaustilanteen ainutkertaisuuden vuoksi sovittua
          kuvausajankohtaa on mahdoton siirtää (esim. häät, hautajaiset tms
          tapahtumat), on kuvaajalla velvollisuus yrittää järjestää paikalle
          toinen kuvaaja tilalle. Kuvaaja ei ole kuitenkaan vastuussa siitä, jos
          sijaista ei hänen toimestaan löydy.<br></br>Kuvaustilanteessa
          kuvaajalla on oikeus keskeyttää kuvaustilanne, mikäli joku
          kuvausseurueesta käyttäytyy uhkaavasti tai väkivaltaisesti joko
          kuvaajaa tai kalustoa kohtaan.<br></br>Asiakas takaa valokuvaajalle
          työrauhan ja toimii tämän kanssa yhteistyössä sekä ennen kuvauksia
          että kuvausten aikana, jotta valokuvaukset onnistuvat odotetulla
          tavalla.
        </p>
        <p>
          Tähän sopimukseen sovelletaan Suomen lakia. Sopimuksesta aiheutuvat
          erimielisyydet ratkaistaan ensisijaisesti sovittelemalla. Viime
          kädessä erimielisyydet ratkaistaan Helsingin käräjäoikeudessa.
        </p>
        <p>© Sara Tuononen Photography</p>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
