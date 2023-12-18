import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { withHistory } from '../../utils/mock-component';

describe('Footer', () => {
  it('render correctly', () => {
    const preparedComponent = withHistory(<Footer />);

    render(preparedComponent);

    screen.getAllByText('W').forEach((logoLetterW) => {
      expect(logoLetterW).toBeInTheDocument();
    });
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
  });
});
