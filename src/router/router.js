import { routes } from './routes';

import { $ } from '@/utils/querySelector';

const router = {
	findMatchingRoute(pathname, searchParams) {
		let route = routes.find((route) => {
			const routeParts = route.path.split('/');
			const pathParts = pathname.split('/');

			if (routeParts.length !== pathParts.length) return false;

			return routeParts.every((part, index) => part === pathParts[index] || part.startsWith(':'));
		});

		if (route && route.name === 'article') {
			const id = pathname.split('/')[2];

			if (!id || id.trim() === '') {
				route = null;
			} else {
				route.param = { id, searchParams };
			}
		} else if (route) {
			route.param = { searchParams };
		}

		if (!route) {
			route = routes.find((route) => route.name === 'notfound');
		}

		return route;
	},
	navigateTo(path, replace = false) {
		replace
			? window.history.replaceState(null, '', path)
			: window.history.pushState(null, '', path);
		this.route();
	},

	route() {
		const url = new URL(window.location.href);
		const pathname = url.pathname;
		const searchParams = Object.fromEntries(url.searchParams.entries());
		let route = this.findMatchingRoute(pathname, searchParams);

		if (!route || (route.name === 'notfound' && pathname !== '/notfound')) {
			this.navigateTo('/notfound');
			return;
		}

		const { element: PageElement, param, name } = route;
		let pageInstance;

		if (name === 'notfound') {
			pageInstance = new PageElement($('#app'));
		} else {
			pageInstance = new PageElement($('#content'), param?.id, param?.searchParams);
		}

		pageInstance.render();
	},
};

export default router;
