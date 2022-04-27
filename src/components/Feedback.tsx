import { useWindowDimensions } from "../common";
import "../css/App.css";

const Feedback = (props: { feedback: string; name: string }) => {
  const { width } = useWindowDimensions();
  return (
    <div
      style={
        width > 1008
          ? {
              width: "50%"
            }
          : {
              width: "100%"
            }
      }
    >
      <p
        className="feedback"
        style={{ fontStyle: "italic", textAlign: "center" }}
      >
        "{props.feedback}"
      </p>
      <p style={{ textAlign: "center" }}>-{props.name}</p>
    </div>
  );
};

export default Feedback;
