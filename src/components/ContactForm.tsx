import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = (props: { onEmailSent: Function }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (null !== form.current && undefined !== form.current) {
      emailjs
        .sendForm(
          "service_el9n0vo",
          "template_pmvxzoh",
          form.current,
          "bi0ym60REalNHkmzl"
        )
        .then(
          (result) => {
            console.log(result.text);
            props.onEmailSent(true);
          },
          (error) => {
            console.log(error.text);
            props.onEmailSent(false);
          }
        );
    } else {
      console.log("error: form.current is null or undefined");
      props.onEmailSent(false);
    }
  };

  return (
    <div style={{ width: "100%", height: 600 }}>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Nimi*
          <input type="text" name="sender_name" className="formInput" />
        </label>
        <label>
          Email*
          <input type="email" name="sender_email" className="formInput" />
        </label>
        <label>
          Viesti*
          <textarea
            name="message"
            className="formInput"
            style={{ height: 382, resize: "vertical" }}
          />
        </label>
        <input type="submit" value="LÄHETÄ" className="formInput" />
      </form>
    </div>
  );
};

export default ContactForm;
