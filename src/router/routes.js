import Article from '@/pages/Article.js';
import Home from '@/pages/Home.js';
import NotFound from '@/pages/Notfound';
import { $ } from '@/utils/querySelector';

export const routes = [
	{ path: '/', name: 'home', page: ({ $target }) => new Home($target) },
	{
		path: '/articles/:id',
		name: 'articles',
		page: ({ $target, param }) => new Article($target, param.id),
	},
	{
		path: '/notfount',
		name: 'notfound',
		page: () => new NotFound($('#app')),
	},
];
