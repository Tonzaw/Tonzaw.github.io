import { ReactComponent as Up } from "../images/icons/up.svg";
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
const ToTopButtonSimple = () => {
  return (
    <button className="toTopButtonSimple" onClick={goToTop}>
      <Up
        fill="#ffffff"
        stroke="#ffffff"
        style={{ height: 22, width: 22, alignSelf: "center" }}
      />
    </button>
  );
};

export default ToTopButtonSimple;
