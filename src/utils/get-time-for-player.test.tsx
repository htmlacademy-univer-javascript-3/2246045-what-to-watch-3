import { getTimeForPlayer } from './get-time-for-player';

describe('Get time left', () => {
  it('return time left in format "-MM:SS"', () => {
    const mockSecondsCount = 132;
    const expectedTimeLeft = '-02:12';

    const result = getTimeForPlayer(mockSecondsCount);

    expect(result).toEqual(expectedTimeLeft);
  });

  it('return time left in format "-HH:MM:SS"', () => {
    const mockSecondsCount = 3732;
    const expectedTimeLeft = '-01:02:12';

    const result = getTimeForPlayer(mockSecondsCount);

    expect(result).toEqual(expectedTimeLeft);
  });
});
