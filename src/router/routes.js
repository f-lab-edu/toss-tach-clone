import Article from '@/pages/Article.js';
import Home from '@/pages/Home.js';
import NotFound from '@/pages/Notfound';

export const routes = [
	{
		path: '/',
		name: 'home',
		element: Home,
		// page: ({ $target }) => new Home($target)
	},
	{
		path: '/articles/:id',
		name: 'article',
		element: Article,
		// page: ({ $target, param }) => new Article($target, param.id),
	},
	{
		path: '/notfound',
		name: 'notfound',
		element: NotFound,
		// page: () => new NotFound($('#app')),
	},
];
