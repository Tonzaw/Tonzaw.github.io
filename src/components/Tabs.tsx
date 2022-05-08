import { useRef, useState, useEffect } from "react";
import { useWindowDimensions } from "../common";
import BoudoirPortfolio from "./BoudoirPortfolio";
import CouplesPortfolio from "./CouplesPortfolio";
import FamilyPortfolio from "./FamilyPortfolio";
import NewbornPortfolio from "./NewbornPortfolio";
import PetsPortfolio from "./PetsPortfolio";
import PortraitsPortfolio from "./PortraitsPortfolio";
import TabContent from "./TabContent";
import ToTopButton from "./ToTopButton";

const Tabs = () => {
  const { width } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState("tab1");
  const [left, setLeft] = useState(0);
  const [stripeWidth, setStripeWidth] = useState(0);
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
        setStripeWidth(elem.offsetWidth - 32);
      }
    }
    function handleResize() {
      let elem = getSelectedElement(activeTab);
      if (elem != null) {
        setLeft(elem.getBoundingClientRect().x + 16);
        setStripeWidth(elem.offsetWidth - 32);
      }
    }
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  }, [left, activeTab]);

  const handleClick = (id: string) => {
    setActiveTab(id);
    let elem = getSelectedElement(id);

    if (elem != null) {
      setLeft(elem.getBoundingClientRect().x + 16); // takes margins into account
      setStripeWidth(elem.offsetWidth - 32);
    }
  };

  const getSelectedElement = (id: string) => {
    switch (id) {
      case "tab1":
        return tabNavItem1.current;
      case "tab2":
        return tabNavItem2.current;
      case "tab3":
        return tabNavItem3.current;
      case "tab4":
        return tabNavItem4.current;
      case "tab5":
        return tabNavItem5.current;
      case "tab6":
        return tabNavItem6.current;
      default:
        return tabNavItem1.current;
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
        {width > 768 ? (
          <div className="stripe" style={{ left: left, width: stripeWidth }} />
        ) : (
          ""
        )}
      </div>
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <CouplesPortfolio />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <FamilyPortfolio />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <BoudoirPortfolio />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <PetsPortfolio />
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <PortraitsPortfolio />
        </TabContent>
        <TabContent id="tab6" activeTab={activeTab}>
          <NewbornPortfolio />
        </TabContent>
      </div>
      <ToTopButton />
    </div>
  );
};

export default Tabs;
