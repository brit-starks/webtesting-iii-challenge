import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test("it should render correctly", () => {
  render(<Dashboard />)
})

test('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});