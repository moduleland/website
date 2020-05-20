
import moment from 'moment';

export const GetDateFormat = (date?: Date, format?: string) =>
    moment(date || Date.now()).format(format || 'DD-MM-YYYY HH:mm:ss');

export const GetDiffTime = (date: Date) => moment(Date.now()).diff(date, 'days');

export const GetMinutesSecondsTime = (seconds: number) => {
    const minutes = Math.trunc(seconds / 60) + 1;
    return (minutes > 1) ? `expire on ${minutes} minutes` : `expire on ${seconds} seconds`;
}
