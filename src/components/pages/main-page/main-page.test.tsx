import { render, screen } from '@testing-library/react';
import MainPage from './main-page';
import { withStore, withHistory } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';

describe('MainScreen', () => {
  it('render correctly', () => {
    const { withStoreComponent } = withStore(
      withHistory(<MainPage />),
      makeFakeStore()
    );
    render(withStoreComponent);

    expect(screen.getByTestId('page-content')).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
