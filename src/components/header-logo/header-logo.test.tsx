import { render, screen } from '@testing-library/react';
import HeaderLogo from './header-logo';
import { withHistory } from '../../utils/mock-component';

describe('HeaderLogo', () => {
  it('render correctly', () => {
    const preparedComponent = withHistory(<HeaderLogo />);

    render(preparedComponent);

    screen.getAllByText('W').forEach((logoLetterW) => {
      expect(logoLetterW).toBeInTheDocument();
    });
    expect(screen.getByText('T')).toBeInTheDocument();
  });
});
