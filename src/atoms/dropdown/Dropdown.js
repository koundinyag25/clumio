import React, { useCallback, useMemo, useState } from 'react';
import cx from 'classnames';

import { ThemeContext } from '../../providers/themeProvider';
import sx from './dropdown.module.scss';

const Dropdown = ({
  options = [],
  value,
  onOptionClick = () => {},
  label,
  defaultLabel = 'Select',
}) => {
  const [visible, setVisibile] = useState(false);
  const valueOptionsMap = useMemo(
    () =>
      options.reduce(
        (acc, { label, value }) => ({ ...acc, [value]: label }),
        {}
      ),
    [options]
  );

  const renderDropdownOptions = useCallback(() => {
    return (options || []).map(({ label, value }) => (
      <div
        className={sx.item}
        onClick={handleOptionClick({ label, value })}
        key={value}
      >
        {label}
      </div>
    ));
  }, [options]);

  const handleOptionClick = useCallback((value) => () => {
    onOptionClick(value);
    setVisibile(false);
  });

  const handleMouseDown = useCallback(() => {
    setVisibile(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setVisibile(false);
  }, []);

  const val = valueOptionsMap[value] || defaultLabel;
  return (
    <div
      tabIndex={1}
      className={cx(sx.dropdownContainer)}
      onBlur={handleOnBlur}
    >
      <div>{label}</div>
      <div className={sx.labelContainer} onClick={handleMouseDown}>
        {val}
      </div>
      {visible && (
        <div className={cx(sx.dropdown)}>{renderDropdownOptions()}</div>
      )}
    </div>
  );
};

export default Dropdown;
