import { combineReducers } from "redux";
import App from "@redux/app/reducer";
import Auth from "@redux/auth/reducer";
import Dashboard from "@redux/dashboard/reducer";
import ThemeSwitcher from "@redux/themeSwitcher/reducer";
import LanguageSwitcher from "@redux/languageSwitcher/reducer";
import drawer from "@redux/drawer/reducer";

export default combineReducers({
  Auth,
  App,
  Dashboard,
  ThemeSwitcher,
  LanguageSwitcher,
  drawer,
});
