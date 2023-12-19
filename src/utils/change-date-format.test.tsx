import { getAltDate, humanizeDate } from './change-date-format';

describe('Change date format', () => {
  const mockDate = '2023-11-22T17:00:00.277Z';

  it('return date in format "MMMM DD, YYYY" with "humanizeDate"', () => {
    const expectedDate = 'November 22, 2023';

    const result = humanizeDate(mockDate);

    expect(result).toBe(expectedDate);
  });

  it('return date in format "YYYY-MM-DD" with "getAltDate"', () => {
    const expectedDate = '2023-11-22';

    const result = getAltDate(mockDate);

    expect(result).toBe(expectedDate);
  });
});
