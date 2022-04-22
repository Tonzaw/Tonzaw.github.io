import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import ContactForm from "../components/ContactForm";
import "../css/App.css";
import { useWindowDimensions } from "../common";
import EmailSent from "../components/EmailSent";
import { useState } from "react";

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
    console.log("onReset");
    setEmailSent(false);
    setEmailError(false);
  };

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
                    flex: 1,
                    marginTop: 16,
                    marginRight: 12,
                    minWidth: 468,
                    order: 0
                  }
                : {
                    flex: 1,
                    marginTop: 16,
                    minWidth: 468,
                    order: 1
                  }
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
          <div
            style={
              width >= 1008
                ? {
                    flex: 1,
                    marginTop: 16,
                    marginLeft: 12,
                    minWidth: 468,
                    order: 1
                  }
                : {
                    flex: 1,
                    marginTop: 16,
                    minWidth: 468,
                    order: 0,
                    marginBottom: 24
                  }
            }
          >
            {emailSent ? (
              <div>
                {emailError ? (
                  <EmailSent success={false} onReset={onReset} />
                ) : (
                  <EmailSent success={true} onReset={onReset} />
                )}
              </div>
            ) : (
              <div>
                <ContactForm onEmailSent={onEmailSent} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
