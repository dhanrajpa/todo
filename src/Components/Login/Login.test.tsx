import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { cleanup } from '@testing-library/react'
// import ShallowRenderer from 'react-test-renderer/shallow';
// jest.mock("axios", () => ({
//     _esModule: true,
//     default: {
//         get: () => ({
//             data: { id: 1, name: "john" }
//         })
//     }
// }))

// const renderer = new ShallowRenderer()

test('user Input should be rendered', () => {
    render(<Login />)
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput).toBeInTheDocument()
});
test('Password Input should be rendered', () => {
    render(<Login />)
    const pwdInput = screen.getByPlaceholderText(/password/i);
    expect(pwdInput).toBeInTheDocument()

});

test('Login Button should be disabled', () => {
    render(<Login />)
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
});

test('Login  should not be render', () => {
    render(<Login />)
    const btn = screen.getByRole("button");
    expect(btn).not.toHaveTextContent(/please wait/i);

});
test('error vivibility', async () => {
    render(<Login />)
    const labelError = screen.getByTestId("errorMsg");
    expect(labelError).toBeInTheDocument();
    expect(labelError).not.toBeVisible();
});


test('user input value to be empty ', () => {
    render(<Login />);
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput).toHaveValue("");
    expect(userInput).toBeRequired();
});

test('Password Input should be empty', () => {
    render(<Login />)
    const pwdInput = screen.getByPlaceholderText(/password/i);
    expect(pwdInput).toHaveValue("");
    expect(pwdInput).toBeRequired();
});

test('user input value to be change ', () => {
    render(<Login />);
    const userInput = screen.getByPlaceholderText(/username/i);
    //onchange value 
    const testValue = "test";
    fireEvent.change(userInput, { target: { value: testValue } })
    expect(userInput).toHaveValue(testValue);

});

test('Password Input should be change', () => {
    render(<Login />)
    const pwdInput = screen.getByPlaceholderText(/password/i);
    //onchange value 
    const testPwd = "testPwd";
    fireEvent.change(pwdInput, { target: { value: testPwd } })
    expect(pwdInput).toHaveValue(testPwd);
});

test('Login Button should not be disabled after input change', () => {
    render(<Login />)
    const btn = screen.getByRole("button");
    const userInput = screen.getByPlaceholderText(/username/i);
    const pwdInput = screen.getByPlaceholderText(/password/i);

    const testValue = "test";
    fireEvent.change(userInput, { target: { value: testValue } });
    fireEvent.change(pwdInput, { target: { value: testValue } });
    expect(btn).not.toBeDisabled();
});
