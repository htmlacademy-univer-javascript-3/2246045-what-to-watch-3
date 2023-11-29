const HOUR_MINUTES_COUNT = 60;

export const getRunTime = (runTime: number) => {
  const hour = Math.floor(runTime / HOUR_MINUTES_COUNT);
  const minute = runTime - hour * HOUR_MINUTES_COUNT;
  return `${hour}h ${minute}m`;
};
