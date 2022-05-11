import { useWindowDimensions } from "../common";

const BannerImage = (props: { image: any }) => {
  const { width } = useWindowDimensions();
  let bannerImageHeight = "48vh";
  if (width > 768) {
    bannerImageHeight = "48vh";
  } else if (width <= 768 && width > 450) {
    bannerImageHeight = "30vh";
  } else {
    bannerImageHeight = "auto";
  }
  return (
    <img
      src={props.image}
      alt=""
      style={{
        width: "100%",
        height: bannerImageHeight,
        objectFit: "cover"
      }}
    />
  );
};

export default BannerImage;
