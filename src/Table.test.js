import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';
import EmptyTable from './components/EmptyTable';
import { shallow } from 'enzyme';

it('renders empty table', () => {
  const rows = [];
  const headings = [];

  const wrapper = shallow(<Table rows={rows} headings={headings} />);
  expect(wrapper.find(EmptyTable).length).toBe(1)
});

it('renders regular table', () => {
  const rows = ['test', 12];
  const headings = [];

  const wrapper = shallow(<Table rows={rows} headings={headings} />);
  expect(wrapper.find(EmptyTable).length).toBe(0)
})
