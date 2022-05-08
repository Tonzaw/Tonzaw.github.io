import { useState } from "react";
import { ReactComponent as Plus } from "../images/icons/plus.svg";
import { ReactComponent as Minus } from "../images/icons/minus.svg";
import { primaryColor } from "../styles/colors";

const contentStyle = {
  overflow: "hidden",
  transition: "all 0.5s"
};

const contentExpandedStyle = {
  ...contentStyle,
  height: "auto",
  filter: "opacity(1)"
};

const contentCollapsedStyle = {
  ...contentStyle,
  height: "0",
  filter: "opacity(0)"
};

const FaqItem = (props: { title: string; content: string }) => {
  const [expanded, setExpanded] = useState(false);
  const handleHeaderClick = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <div className="faqItem">
      <div
        style={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center"
        }}
        onClick={handleHeaderClick}
      >
        <div className="faqTitle">{props.title}</div>
        <div
          style={{
            padding: "3px",
            flex: "1",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          {expanded ? (
            <Minus
              fill={primaryColor}
              stroke={primaryColor}
              className="faqItemIcon"
            />
          ) : (
            <Plus
              fill={primaryColor}
              stroke={primaryColor}
              className="faqItemIcon"
            />
          )}
        </div>
      </div>
      <div style={expanded ? contentExpandedStyle : contentCollapsedStyle}>
        <p
          style={{
            paddingRight: 46,
            color: primaryColor
          }}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
