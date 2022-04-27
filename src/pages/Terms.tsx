import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import "../css/App.css";

function Terms() {
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
        <h2 style={{ marginTop: 24 }}>KUVAUSEHDOT</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
