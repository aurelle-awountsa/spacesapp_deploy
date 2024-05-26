import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Connexion from './Connexion';

jest.mock('axios');

describe('Connexion component', () => {
  it('submits form with valid data', async () => {
    const navigateMock = jest.fn();
    const wrapper = shallow(<Connexion />);
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    axios.post.mockResolvedValueOnce({ data: { token: 'testToken' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    await Promise.resolve(); // wait for the promises to resolve
    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/user/login', { email: 'test@example.com', password: 'password' });
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'testToken');
    expect(wrapper.find('Navigate').prop('to')).toBe('/home');
  });

 
});
