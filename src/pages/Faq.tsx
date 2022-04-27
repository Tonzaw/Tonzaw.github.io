import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function Faq() {
  return (
    <div className="page">
      <MenuBar transparent={false} />
      <div
        className="container"
        style={{
          height: "auto",
          marginBottom: 64
        }}
      >
        <h2 style={{ marginTop: 24 }}>USEIN KYSYTTYÄ</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
