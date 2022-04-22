import { render, screen } from './utils';
import Login from '../pages/Login';

test('Login Button show successfully', () => {
  render(<Login />);

  const button = screen.getByRole('button', { name: /login with spotify/i });

  expect(button).toBeInTheDocument();
});