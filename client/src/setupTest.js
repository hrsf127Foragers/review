// import Enzyme from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-15.4';
const Enzyme = require('enzyme');
cosnt EnzymeAdapter = require('enzyme-adapter-react-15.4');

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});