import { getRunTime } from './get-run-time';

describe('Get run time', () => {
  it('return run time in format "h m"', () => {
    const mockMinuteCount = 156;
    const expectedRunTime = '2h 36m';

    const result = getRunTime(mockMinuteCount);

    expect(result).toEqual(expectedRunTime);
  });
});
