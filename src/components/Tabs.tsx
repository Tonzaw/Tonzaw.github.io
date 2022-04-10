import { useRef, useState, useEffect } from "react";
import FirstTab from "./FirstTab";
import TabContent from "./TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const tabNavItem1 = useRef<HTMLLIElement>(null);
  const tabNavItem2 = useRef<HTMLLIElement>(null);
  const tabNavItem3 = useRef<HTMLLIElement>(null);

  useEffect(() => {
    console.log("left: " + left);
    if (left === 0) {
      let elem = tabNavItem1.current;
      if (elem != null) {
        setLeft(elem.getBoundingClientRect().x + 16);
        setWidth(elem.offsetWidth - 32);
      }
    }
  }, [left]);

  const handleClick = (id: string) => {
    setActiveTab(id);
    let elem = tabNavItem1.current;
    switch (id) {
      case "tab1":
        elem = tabNavItem1.current;
        break;
      case "tab2":
        elem = tabNavItem2.current;
        break;
      case "tab3":
        elem = tabNavItem3.current;
        break;
      default:
        break;
    }

    if (elem != null) {
      setLeft(elem.getBoundingClientRect().x + 16);
      setWidth(elem.offsetWidth - 32);
    }
  };

  return (
    <div className="Tabs">
      <div>
        <ul className="nav">
          <li
            ref={tabNavItem1}
            onClick={() => handleClick("tab1")}
            className={activeTab === "tab1" ? "active" : ""}
          >
            PARISKUNNAT
          </li>
          <li
            ref={tabNavItem2}
            onClick={() => handleClick("tab2")}
            className={activeTab === "tab2" ? "active" : ""}
          >
            VAUVAT
          </li>
          <li
            ref={tabNavItem3}
            onClick={() => handleClick("tab3")}
            className={activeTab === "tab3" ? "active" : ""}
          >
            BOUDOIR
          </li>
        </ul>
        <div className="stripe" style={{ left: left, width: width }} />
      </div>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstTab />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <FirstTab />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <FirstTab />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
