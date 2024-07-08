import ArticlePage from '@/pages/ArticlePage';
import Home from '@/pages/Home';
import NotFound from '@/pages/Notfound';
import type { Route } from '@/types/RouterTypes';

export const routes: Route[] = [
	{
		path: '/',
		name: 'home',
		element: Home,
		// page: ({ $target }) => new Home($target)
	},
	{
		path: '/articles/:id',
		name: 'article',
		element: ArticlePage,
		// page: ({ $target, param }) => new Article($target, param.id),
	},
	{
		path: '/notfound',
		name: 'notfound',
		element: NotFound,
		// page: () => new NotFound($('#app')),
	},
];
