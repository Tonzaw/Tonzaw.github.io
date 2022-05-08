import { ReactComponent as Checkmark } from "../images/icons/checkmark.svg";
import { ReactComponent as Fail } from "../images/icons/fail.svg";
import { primaryColor } from "../styles/colors";

const EmailSent = (props: { success: boolean; onReset: Function }) => {
  const closeView = () => {
    props.onReset();
  };
  return (
    <div
      style={
        props.success
          ? {
              width: "100%",
              height: "100%"
            }
          : {
              width: "100%",
              height: "100%"
            }
      }
    >
      {props.success ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Checkmark fill={primaryColor} className="emailSuccessIcon" />
          <p style={{ fontSize: 20, color: primaryColor, textAlign: "center" }}>
            Viesti lähetetty. Vastaan mahdollisimman pian!
          </p>
        </div>
      ) : (
        <div
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Fail fill={"#ac2c30"} className="emailFailIcon" />
          <p style={{ fontSize: 20, color: primaryColor, textAlign: "center" }}>
            Lähettäminen epäonnistui. Yritä uudelleen!
          </p>
          <input
            type="submit"
            value="YRITÄ UUDELLEEN"
            className="formInput"
            style={{
              width: "50%"
            }}
            onClick={closeView}
          />
        </div>
      )}
    </div>
  );
};
// #01826b dark green
// #00be9d light green
// #ac2c30 dark red
// #f35f63 light red
export default EmailSent;
