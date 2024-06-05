import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import timezone from 'dayjs/plugin/timezone';
dayjs.extend(timezone);

import 'dayjs/locale/ko';
dayjs.locale('ko');

import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);

export default dayjs;
