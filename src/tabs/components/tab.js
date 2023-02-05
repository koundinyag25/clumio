import React, { Children } from 'react';
import cx from 'classnames';
import sx from './tabs.module.scss';

const Tab = ({ selected, onTabSelect, label, tabKey, children }) => {
  return (
    <div
      className={cx(sx.tab, { [sx.selected]: selected })}
      onClick={onTabSelect}
    >
      {children}
    </div>
  );
};

export default React.memo(Tab);
