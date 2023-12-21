import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import MyListPage from './my-list';

describe('MyListPage', () => {
  it('render correctly', () => {
    const { withStoreComponent } = withStore(withHistory(<MyListPage />), makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
