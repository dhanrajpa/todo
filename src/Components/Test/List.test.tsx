import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ListA } from '../List';

test('Input behaviour', async () => {
    const user = userEvent.setup();

    render(<ListA />);
    // console.log(<ListA />);
    // const list = screen.getAllByTestId("notes_list");





});
