const TabContent = (props: {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}) => {
  return props.activeTab === props.id ? (
    <div className="TabContent">{props.children}</div>
  ) : null;
};

export default TabContent;
