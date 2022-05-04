import { useState } from "react";
import { ReactComponent as Plus } from "../images/icons/plus.svg";
import { ReactComponent as Minus } from "../images/icons/minus.svg";

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

const ExpanderItem = (props: { title: string; content: string }) => {
  const [expanded, setExpanded] = useState(false);
  const handleHeaderClick = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <div
      style={{
        margin: "12px 0",
        padding: 20,
        border: "1px solid #425664",
        borderRadius: 4,
        boxShadow: "2px 2px #6e6e6e",
        background: "#F6F4F2"
      }}
    >
      <div
        style={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center"
        }}
        onClick={handleHeaderClick}
      >
        <div style={{ fontSize: 20, color: "#425664" }}>{props.title}</div>
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
              fill="#425664"
              stroke="#425664"
              style={{
                height: 46,
                width: 46,
                alignSelf: "center"
              }}
            />
          ) : (
            <Plus
              fill="#425664"
              stroke="#425664"
              style={{ height: 46, width: 46, alignSelf: "center" }}
            />
          )}
        </div>
      </div>
      <div style={expanded ? contentExpandedStyle : contentCollapsedStyle}>
        <p
          style={{
            paddingRight: 46
          }}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default ExpanderItem;
