const TabNavItem = (props: {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: Function;
}) => {
  const handleClick = () => {
    props.setActiveTab(props.id);
  };

  return (
    <li
      onClick={handleClick}
      className={props.activeTab === props.id ? "active" : ""}
    >
      {props.title}
    </li>
  );
};
export default TabNavItem;
