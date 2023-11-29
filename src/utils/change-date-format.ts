import dayjs from 'dayjs';

export const humanizeDate = (date: string) => dayjs(date).format('MMMM DD, YYYY');

export const getAltDate = (date: string) => dayjs(date).format('YYYY-MM-DD');
