import { getCurrentTheme } from "./config";

const actions = {
  CHANGE_THEME: "CHANGE_THEME",
  SWITCH_ACTIVATION: "SWITCH_ACTIVATION",
  switchActivation: () => ({
    type: actions.SWITCH_ACTIVATION,
  }),
  changeTheme: (attribute, themeName) => {
    const theme = getCurrentTheme(attribute, themeName);
    return {
      type: actions.CHANGE_THEME,
      attribute,
      theme,
    };
  },
};
export default actions;
