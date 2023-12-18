import { withHistory } from '../../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import LoadingPage from './loading-page';

describe('Component: LoadingPage', () => {
  it('render correctly', () => {

    const loadingId = 'LoadingPage';

    const preparedComponent = withHistory(<LoadingPage />);

    render(preparedComponent);

    expect(screen.getByTestId(loadingId)).toBeInTheDocument();
  });
});
