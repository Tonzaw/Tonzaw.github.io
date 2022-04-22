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
              height: 600,
              backgroundColor: "#00be9d",
              maxWidth: 400,
              margin: "auto"
            }
          : {
              width: "100%",
              height: 600,
              backgroundColor: "#f35f63",
              maxWidth: 400,
              margin: "auto"
            }
      }
    >
      {props.success ? (
        <div>
          <div
            style={{
              height: 520,
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <img
              src={require("../images/icons/success.png")}
              alt=""
              style={{ height: 120, width: 120, marginTop: 136 }}
            />
            <p
              style={{
                color: "white",
                fontFamily: "Roboto-Regular",
                fontWeight: "100",
                fontSize: 32,
                marginBottom: 12
              }}
            >
              VALMISTA
            </p>
            <p
              style={{
                color: "white",
                fontFamily: "Roboto-Regular",
                fontWeight: "100",
                textAlign: "center",
                paddingLeft: 32,
                paddingRight: 32
              }}
            >
              Sähköposti lähetetty onnistuneesti. Vastaan mahdollisimman pian!
            </p>
          </div>

          <button
            onClick={closeView}
            style={{
              height: 80,
              width: "100%",
              backgroundColor: "#01826b",
              border: 0,
              fontSize: 18,
              fontWeight: "bold",
              color: "white"
            }}
          >
            JATKA
          </button>
        </div>
      ) : (
        <div>
          <div
            style={{
              height: 520,
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <img
              src={require("../images/icons/fail.png")}
              alt=""
              style={{ height: 120, width: 120, marginTop: 136 }}
            />
            <p
              style={{
                color: "white",
                fontFamily: "Roboto-Regular",
                fontWeight: "100",
                fontSize: 32,
                marginBottom: 12
              }}
            >
              HUPSIS!
            </p>
            <p
              style={{
                color: "white",
                fontFamily: "Roboto-Regular",
                fontWeight: "100",
                textAlign: "center",
                paddingLeft: 32,
                paddingRight: 32
              }}
            >
              Sähköpostin lähettäminen epäonnistui. Yritä uudelleen tai lähetä
              suoraan sähköpostia osoitteeseen info@saratuononen.com
            </p>
          </div>

          <button
            onClick={closeView}
            style={{
              height: 80,
              width: "100%",
              backgroundColor: "#ac2c30",
              border: 0,
              fontSize: 18,
              fontWeight: "bold",
              color: "white"
            }}
          >
            YRITÄ UUDELLEEN
          </button>
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
