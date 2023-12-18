import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import ShowMoreFilmButton from './show-more-button';

describe('Component: ShowMoreFilmButton', () => {
  it('render correctly', () => {
    const onShowMoreFilmButtonClick = () => '';
    const textButton = /Show more/i;

    const preparedComponent = withHistory(<ShowMoreFilmButton onShowMoreFilmButtonClick={onShowMoreFilmButtonClick}/>);

    render(preparedComponent);

    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
