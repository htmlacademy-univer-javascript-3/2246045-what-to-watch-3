import { SECOND_COUNT_IN_HOUR, SECOND_COUNT_IN_MINUTE } from '../const';

export const getTimeForPlayer = (secondCount: number) => {
  if (secondCount > SECOND_COUNT_IN_HOUR) {
    const hourCount = Math.trunc(secondCount / SECOND_COUNT_IN_HOUR);
    const minuteCount = Math.trunc((secondCount - (hourCount * SECOND_COUNT_IN_HOUR)) / SECOND_COUNT_IN_MINUTE);
    const seconds = secondCount - (hourCount * SECOND_COUNT_IN_HOUR) - (minuteCount * SECOND_COUNT_IN_MINUTE);
    return `-${`${hourCount}`.padStart(2, '0')}:${`${minuteCount}`.padStart(2, '0')}:${`${seconds}`.padStart(2, '0')}`;
  } else {
    const minuteCount = Math.trunc(secondCount / SECOND_COUNT_IN_MINUTE);
    const seconds = Math.trunc(secondCount - (minuteCount * SECOND_COUNT_IN_MINUTE));
    return `-${`${minuteCount}`.padStart(2, '0')}:${`${seconds}`.padStart(2, '0')}`;
  }
};