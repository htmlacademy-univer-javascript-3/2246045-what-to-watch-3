import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import MyListScreen from './my-list';

describe('MyListScreen', () => {
  it('render correctly', () => {
    const { withStoreComponent } = withStore(withHistory(<MyListScreen />), makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
