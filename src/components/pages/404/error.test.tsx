import { render, screen } from '@testing-library/react';
import { withHistory } from '../../../utils/mock-component';
import Error from './error';

describe('Error', () => {
  it('render correctly', () => {
    const preparedComponent = withHistory(<Error />);

    render(preparedComponent);

    expect(screen.getByText(/Упсс../i)).toBeInTheDocument();
    expect(screen.getByText(/что-то пошло не так, страница не найдена./i)).toBeInTheDocument();
  });
});
