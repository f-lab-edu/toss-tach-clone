import dayjs from '@/plugins/dayjs/index.js';

export const formatDate = (date) => {
	return dayjs(date).format('YYYY-MM-DD');
};
