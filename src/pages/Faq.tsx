import { useWindowDimensions } from "../common";
import BurgerMenu from "../components/BurgerMenu";
import ExpanderItem from "../components/ExpanderItem";
import Footer2 from "../components/Footer2";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function Faq() {
  const { width } = useWindowDimensions();
  return (
    <div className="page">
      {width > 767 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <img
        src={require("../images/family/family1.jpg")}
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
        <h2 style={{ marginTop: 24 }}>USEIN KYSYTTYÄ</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <ExpanderItem
              title="Milloin kuvaus maksetaan?"
              content="Lähetän kuvausmaksun asiakkaalle heti varauksen yhteydessä. Kuvausmaksu tulee olla maksettuna ennen kuvauksia. Kuvapaketin lasku lähetetään esivalinnan jälkeen."
            />
          </li>
          <li>
            <ExpanderItem
              title="Mitä tarkoittaa esivalintagalleria ja kauanko kuvien saaminen kestää?"
              content="Esivalintagalleria koostuu vähintään n. 40-60 kuvaajan valitsemasta helmestä, eli kuvausten parhaista otoksista. Kuvausten jälkeen viikon sisällä kuvaaja toimittaa sinulle sähköisen linkin, jonka kautta pääset katsomaan näitä kuvia ja valitsemaan haluamasi kuvamäärän. Sinulla on linkin vastaanotettuasi viikko aikaa valita haluamasi kuvapaketti.  Kuvaaja käsittelee valitsemasi kuvat valmiiseen muotoonsa kolmen viikon sisällä loppulaskun näkyessä tilillä ja toimittaa ne sinulle sähköisellä linkillä jpg.-muodossa."
            />
          </li>
          <li>
            <ExpanderItem
              title="Saanko itse muokata kuvia?"
              content="Et. Kuvien tekijänoikeus säilyy kuvaajalla, joka tarkoittaa myös sitä, että kuvien jatkotyöstäminen ja rajailu ei ole sallittua. Kuvat edustavat kuvaajan tyyliä ja kädenjälkeä, eikä niitä siksi voi lähteä muuttamaan. Huomioithan siis kuvaajaa valitsessasi, että hänen tyyli miellyttää sinua."
            />
          </li>
          <li>
            <ExpanderItem
              title="Missä kuvaukset tapahtuvat?"
              content="Kuvauslokaatio sovitaan asiakkaan kanssa yhdessä. Kuvaukset voivat tapahtua mahdollisuuksien mukaan esimerkiksi ulkomiljöössä, asiakkaan kotona, kuvaajan kotona, hotellissa, you name it! Ideoidaan yhdessä. Myös studion vuokraamisesta kuvauksia varten voidaan keskustella asiakkaan kanssa, mikäli sellaiselle on tarvetta. 
              Kuvaukset tapahtuvat lähtökohtaisesti Turun seudulla, ellei toisin sovita."
            />
          </li>
          <li>
            <ExpanderItem
              title="Kuvaukset jännittää. Pitääkö osata olla kameran edessä? "
              content="Ei tarvitse todellakaan tietää miten kameran edessä ollaan! Iso osa kuvattavistani ovat ensikertalaisia. Lähes kaikkia jännittää jossain määrin kuvauksiin tuleminen ja se on täysin luonnollista. Lupaan neuvoa, ohjata ja olla lempeä. Jutskaillaan, hengaillaan ja otetaan samalla kuvia. Kameran edessä ei tarvitse pönöttää, poseerata tai edes hymyillä jos ei siltä tunnu. Yhdessä mietitään, miten saadaan tuntemaan olosi voimaantuneeksi ja upeaksi, jotta saadaan juuri sinun näköiset kuvat!"
            />
          </li>
          <li>
            <ExpanderItem
              title="Miten kannattaa pukeutua kuvauksiin?"
              content="Kuvauksissa tärkeintä on pukea juuri sellaiset vaatteet, mitkä saavat olosi itsevarmsksi ja hyväksi. 
              Yleisinä vinkkeinä suosittelen maanläheisiä, vaaleita ja neutraaleja värejä, sillä ne toimivat aina. Printtejä tai kuviollisia vaatteita en suosittele, sillä ne vetävät usein huomion liikaa puoleensa. Jos tulet vaikkapa kumppanin tai perheen kanssa kuvauksiin, kannattaa miettiä vaatteiden ja värien yhteensointuvuutta. Liehuvat helmat, hengittävät ja väljät kankaat ja erilaiset tekstuurit vaikkapa farkuissa tai muhkeissa villapaidoissa näyttävät kuvissa hyvältä. Yksinkertaisuus toimii aina hyvin. Mikäli kaipaat apua asuvalinnassa, voit aina ottaa minuun yhteyttä asiaan liittyen, niin voimme yhdessä ideoida. Nämä ovat kuitenkin vain vinkkejä, eli itse saat tietenkin päättää mikä miellyttää sinua eniten.
              "
            />
          </li>
          <li>
            <ExpanderItem
              title="Voiko kuvauksissa olla toinen asukokonaisuus mukana?"
              content="Tottakai! Usein asiakkaat haluavat ottaa vaihtovaatteet mukaan, jotta saadaan erilaisia kuvia."
            />
          </li>
          <li>
            <ExpanderItem
              title="Haaveena on kuvauttaa lapsi, mutta hän on luonteeltaan vilkas eikä pysy paikallaan poseeraamassa. Voidaanko silti tulla kuvauksiin?"
              content="Ehdottomasti! Lapsi on terve kun se leikkii ja touhuaa. Olen ammatiltani varhaiskasvatuksen opettaja, joten lasten kanssa leikkiminen ja vuorovaikutus on minulle tuttua. Tulkaa rennoin mielin ja asentein, niin hyvä tulee. Lapsi aistii helposti, jos vanhemmat ovat stressaantuneita ja yrittävät väkisin saada lapsen hymyilemään. Lasten kanssa kuvaaminen on pelkän poseeraamisen sijaan usein tilanteisiin heittäytymistä ja hauskan pitoa. Lähdetään yhdessä vaikka rannalle juoksemaan tai metsäretkelle tutkimaan luontoa. Samalla voidaan räpsiä kuvia ja saada aitoja hetkiä ikuistettua."
            />
          </li>
          <li>
            <ExpanderItem
              title="Pitääkö boudoir-kuvauksissa olla alusvaatteissa ja näyttää paljasta pintaa?"
              content="Ei tarvitse jos ei halua. Sinä päätät omat rajasi ja sen mikä tuntuu juuri sinusta hyvältä. Sensuelli tunnelma ei edellytä paljasta pintaa. Toiselle boudoir-kuvaus tarkoittaa vaikkapa paljaan olkapään näyttämistä, kun taas toinen kokee olonsa kauniiksi alusvaatteillaan. Tärkeintä on, että sinulla on hyvä olla. Kannustan kuitenkin laittamaan omat lempparialusvaatteet itsevarmuutta tuomaan, ja myöskin siltä varalta jos kuvauksissa tuleekin yhtäkkiä tosi itsevarma fiilis!"
            />
          </li>
          <li>
            <ExpanderItem
              title="Kuinka paljon aikaisemmin kuvaukset kannattaa varata?"
              content="Heti kun tiedät, että sinulla on tärkeä elämäntilanne tulossa, josta haluat kuvia. Joskus kalenterini on jo pidemmälle buukattuna, mutta aina kannattaa kysyä lyhyelläkin varoitusajalla. Joskus voi löytyä peruutusaikoja tai mahdollisuus tehdä kalenteriin vielä tilaa."
            />
          </li>
          <li>
            <ExpanderItem
              title="Milloin on hyvä aika odotuskuvauksille? Entä vastasyntyneen kuvaukselle?"
              content="Usein suositellaan, että odotuskuvat otettaisiin raskausviikoilla 30-36. Tällöin vatsa alkaa olla suloisen pyöreä, eikä olo vielä välttämättä niin tukala kuin viimeisillä viikoilla. Tähänkään ei ole kuitenkaan oikeaa tai väärää vastausta, eli voit varata odotuskuvauksen juuri silloin kun itse sen koet parhaaksi. Ihan loppuun ei kannata kuvausta jättää, jottei käy niin että vauva ehtiikin syntyä ennen kuvausta.
              Vastasyntyneen kuvaus toteutetaan vauvan kahden ensimmäisen elinviikon aikana."
            />
          </li>
          <li>
            <ExpanderItem
              title="Onko asiakkaana pakko antaa suostumus kuvien julkiseen käyttöön esimerkiksi sosiaaliseen mediaan tai muuhun markkinointiin?"
              content="Ei ole. Kysyn aina erikseen luvat kuvien käyttöön. Kaikki eivät esimerkiksi halua lapsiensa näkyvän sosiaalisessa mediassa, minkä ymmärrän. Toki olen aina iloinen, jos saan täydentää portfoliotani asiakkaiden kuvilla, mutta se ei ole vaatimus."
            />
          </li>
        </ul>
      </div>
      <Footer2 />
    </div>
  );
}

export default Faq;
