import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

test('Input behaviour', async () => {
    const user = userEvent.setup();

    render(<Input />);

    const textField = screen.getByLabelText(/^input_Note/i)
    const Button = screen.getByRole("button", { name: /Add/i });
    const changeEvent = new CustomEvent('change', {
        detail: {
            'value': 'note1'
        }
    });
    textField.dispatchEvent(changeEvent)

    fireEvent.click(Button)
    console.log(<Input />);
    expect(textField).toHaveDisplayValue("")
    expect(Button).toBeDisabled();

});
