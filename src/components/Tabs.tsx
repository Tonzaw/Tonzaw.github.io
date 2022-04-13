import { useRef, useState, useEffect } from "react";
import BoudoirPortfolio from "./BoudoirPortfolio";
import CouplesPortfolio from "./CouplesPortfolio";
import NewbornPortfolio from "./NewbornPortfolio";
import TabContent from "./TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const tabNavItem1 = useRef<HTMLLIElement>(null);
  const tabNavItem2 = useRef<HTMLLIElement>(null);
  const tabNavItem3 = useRef<HTMLLIElement>(null);
  const tabNavItem4 = useRef<HTMLLIElement>(null);
  const tabNavItem5 = useRef<HTMLLIElement>(null);
  const tabNavItem6 = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (left === 0) {
      let elem = tabNavItem1.current;
      if (elem != null) {
        setLeft(elem.getBoundingClientRect().x + 16);
        setWidth(elem.offsetWidth - 32);
      }
    }
    function handleResize() {
      if (left === 0) {
        let elem = tabNavItem1.current;
        if (elem != null) {
          setLeft(elem.getBoundingClientRect().x + 16);
          setWidth(elem.offsetWidth - 32);
        }
      }
    }
    window.addEventListener("resize", handleResize);
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
      case "tab4":
        elem = tabNavItem4.current;
        break;
      case "tab5":
        elem = tabNavItem5.current;
        break;
      case "tab6":
        elem = tabNavItem6.current;
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
    <div>
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
            PERHEET JA LAPSET
          </li>
          <li
            ref={tabNavItem3}
            onClick={() => handleClick("tab3")}
            className={activeTab === "tab3" ? "active" : ""}
          >
            BOUDOIR
          </li>
          <li
            ref={tabNavItem4}
            onClick={() => handleClick("tab4")}
            className={activeTab === "tab4" ? "active" : ""}
          >
            LEMMIKIT
          </li>
          <li
            ref={tabNavItem5}
            onClick={() => handleClick("tab5")}
            className={activeTab === "tab5" ? "active" : ""}
          >
            HENKILÖKUVAT
          </li>
          <li
            ref={tabNavItem6}
            onClick={() => handleClick("tab6")}
            className={activeTab === "tab6" ? "active" : ""}
          >
            VASTASYNTYNEET
          </li>
        </ul>
        <div className="stripe" style={{ left: left, width: width }} />
      </div>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <CouplesPortfolio />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <CouplesPortfolio />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <BoudoirPortfolio />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <CouplesPortfolio />
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <CouplesPortfolio />
        </TabContent>
        <TabContent id="tab6" activeTab={activeTab}>
          <NewbornPortfolio />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
