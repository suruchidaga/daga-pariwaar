import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ config, changeTheme, selectedId }) => {
  const { id, label, options } = config;
  return (
    <div className="themeSwitchBlock">
      <h4>{label}</h4>
      <div className="themeSwitchBtnWrapper">
        {options.map(option => {
          const { themeName, buttonColor, text } = option;
          const onClick = () => {
            changeTheme(id, themeName);
          };
          const customClass = themeName === selectedId ? 'selectedTheme' : '';
          return (
            <button
              type="button"
              key={themeName}
              onClick={onClick}
              className={customClass}
              style={{ backgroundColor: buttonColor }}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
};
