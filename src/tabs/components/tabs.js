import React, { useCallback, useMemo } from 'react';
import Tab from './tab';
import sx from './tabs.module.scss';

const Tabs = ({
  config,
  onTabSelect,
  selectedTab = '',
  data,
  leftContainer: LeftContainer,
  rightContiner: RightContiner,
}) => {
  const tabKeyVsComponent = useMemo(
    () =>
      (config || []).reduce(
        (acc, { tabKey, component }) => ({
          ...acc,
          [tabKey]: component,
        }),
        {}
      ),
    [config]
  );

  const handleTabClick = useCallback(
    (tabKey) => () => {
      onTabSelect(tabKey);
    },
    []
  );

  const renderTabs = () => {
    const tabs = (config || []).map(({ tabKey, label }) => {
      const isSelected = selectedTab === tabKey;
      return (
        <Tab
          onTabSelect={handleTabClick(tabKey)}
          selected={isSelected}
          tabKey={tabKey}
        >
          {label}
        </Tab>
      );
    });
    return <div className={sx.tabs}>{tabs}</div>;
  };

  const renderTabPanel = () => {
    const currentTab = selectedTab || config[0]?.tabKey;
    const Component = tabKeyVsComponent[currentTab];
    return <Component tabKey={currentTab} data={data} />;
  };

  return (
    <div className={sx.tabsContainer}>
      <div className={sx.tabsHeader}>
        {LeftContainer && <LeftContainer />}
        {renderTabs()}
        {RightContiner && <RightContiner />}
      </div>
      <div className={sx.tabPanel}>{renderTabPanel()}</div>
    </div>
  );
};

export default React.memo(Tabs);
