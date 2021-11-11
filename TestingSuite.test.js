import axios from 'axios';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StarGraphic from './client/components/GlobalComponents/StarGraphic.jsx';
import App from './client/components/App.jsx';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  // it('calls componentDidMount', () => {
  //   sinon.spy(App.prototype, 'componentDidMount');
  //   const wrapper = mount(<App />)
  //   expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  // })
   it('allows us to set props', () => {
     const wrapper = shallow(<App bar='baz' />);
    
   })

})