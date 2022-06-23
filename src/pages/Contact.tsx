import Footer2 from "../components/Footer2";
import MenuBar from "../components/MenuBar";
import ContactForm from "../components/ContactForm";
import "../css/App.css";
import { useWindowDimensions } from "../common";
import EmailSent from "../components/EmailSent";
import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
import BannerImage from "../components/BannerImage";

function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { width } = useWindowDimensions();

  const onEmailSent = (success: boolean) => {
    if (success) {
      setEmailSent(true);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const onReset = () => {
    setEmailSent(false);
    setEmailError(false);
  };

  return (
    <div className="page">
      {width > 768 ? <MenuBar transparent={true} /> : <BurgerMenu />}
      <BannerImage image={require("../images/newborn/newborn1.jpg")} />
      <div
        className="container"
        style={{
          height: "auto",
          marginBottom: 64
        }}
      >
        <h2 style={{ marginTop: 24 }}>YHTEYSTIEDOT</h2>
        <p>
          Huom, olen poissa Suomesta kesä-heinäkuun 2022. Tiedustele vapaita
          kuvausaikoja alla olevan yhteydenottolomakkeen kautta.{" "}
          <b>Kuvauksia voi varata Turun seudulle sekä pääkaupunkiseudulle.</b>{" "}
          Seuraile instagramin puolella tiedottelua mahdollisesti vapautuvista
          kuvausajoista ja muista ajankohtaisista asioista! Kerro viestissäsi
          hieman itsestäsi, kuvaustoiveestasi sekä ajankohdasta, jolloin
          toivoisit kuvauksen tapahtuvan.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"
          }}
        >
          <div
            style={
              width >= 1008
                ? {
                    marginTop: 16,
                    order: 0,
                    width: "50%"
                  }
                : {
                    marginTop: 16,
                    order: 1,
                    width: "100%"
                  }
            }
          >
            <div
              style={
                width >= 1008
                  ? {
                      paddingRight: 12
                    }
                  : {}
              }
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125966.61778411511!2d22.294243104859447!3d60.441444858762345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfi!2sfi!4v1649517670326!5m2!1sfi!2sfi"
                width="100%"
                height={width >= 1008 ? "600" : "200"}
                style={{ border: 0 }}
                loading="lazy"
                tabIndex={0}
                frameBorder={0}
                title="map"
              />
            </div>
          </div>
          <div
            style={
              width >= 1008
                ? {
                    marginTop: 16,
                    order: 1,
                    width: "50%"
                  }
                : {
                    marginTop: 16,
                    order: 0,
                    marginBottom: 24,
                    width: "100%"
                  }
            }
          >
            {emailSent ? (
              <div
                style={
                  width >= 1008
                    ? {
                        paddingLeft: 12,
                        height: "100%"
                      }
                    : {
                        height: "100%"
                      }
                }
              >
                {emailError ? (
                  <EmailSent success={false} onReset={onReset} />
                ) : (
                  <EmailSent success={true} onReset={onReset} />
                )}
              </div>
            ) : (
              <div
                style={
                  width >= 1008
                    ? {
                        paddingLeft: 12
                      }
                    : {}
                }
              >
                <ContactForm onEmailSent={onEmailSent} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Contact;
