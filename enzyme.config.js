/** Used in jest.config.js */
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import 'jest-styled-components'

configure({ adapter: new Adapter() });

const crypto = require("crypto");
Object.defineProperty(global.self, "crypto", {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

if (!process.env.ENABLE_TEST_LOGS) {
  console.log = console.warn = console.debug = console.error = (..._) => {};
}
