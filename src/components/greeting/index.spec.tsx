import { render, screen } from '@testing-library/react';
import Greeting from './index';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //Arrange

    render(<Greeting />);

    //Assert

    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
