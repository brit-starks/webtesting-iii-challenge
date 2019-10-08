import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from '../controls/Controls';

test("it should render correctly", () => {
  render(<Controls />)
})

test('it should contain disable id', () => {
  const toggleLocked = jest.fn();
  const toggleClosed = jest.fn();
  const { getByTestId } = render(
    <Controls 
      locked={toggleLocked}
      closed={toggleClosed}
    />
    );

  const gateClosed = getByTestId(/closed/i);
  const gateLocked = getByTestId(/locked/i);

  fireEvent.click(gateClosed);
  fireEvent.click(gateLocked);

});


// test('it should toggle closed and locked', () => {
//   const toggleLocked = jest.fn();
//   const toggleClosed = jest.fn();

//   render(
//     <Controls
//       locked={toggleLocked}
//       closed={toggleClosed}
//     />
//   );
// });