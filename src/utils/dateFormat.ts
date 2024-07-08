import dayjs from '@/plugins/dayjs/index';

export const formatDate = (date: string | Date): string => {
	return dayjs(date).format('YYYY-MM-DD');
};
