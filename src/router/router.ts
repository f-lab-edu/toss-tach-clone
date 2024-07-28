import { routes } from './routes';

import type { Route, Router } from '@/types/RouterTypes';
import { $ } from '@/utils/querySelector';
import Component from '@/core/Component';

const router: Router = {
	routes,

	findMatchingRoute(
		pathname: string,
		searchParams?: URLSearchParams,
	): Route<unknown, unknown> | null {
		let route = this.routes.find((route) => {
			const routeParts: string[] = route.path.split('/');
			const pathParts: string[] = pathname.split('/');

			if (routeParts.length !== pathParts.length) return false;

			return routeParts.every((part, index) => part === pathParts[index] || part.startsWith(':'));
		});

		if (route && route.name === 'article') {
			const id: string = pathname.split('/')[2];

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

		return route || null;
	},

	navigateTo(path: string, searchParams?: URLSearchParams, replace: boolean = false): void {
		const url: string = searchParams ? `${path}?${searchParams.toString()}` : path;
		replace ? window.history.replaceState(null, '', url) : window.history.pushState(null, '', url);
		this.route();
	},

	route(): void {
		const url: URL = new URL(window.location.href);
		const pathname: string = url.pathname;
		const searchParams: URLSearchParams = new URLSearchParams(url.search);
		const route: Route<unknown, unknown> | null = this.findMatchingRoute(pathname, searchParams);

		if (!route || (route.name === 'notfound' && pathname !== '/notfound')) {
			this.navigateTo('/notfound');
			return;
		}

		const { element: PageElement, param, name } = route;
		let pageInstance: Component<unknown, unknown>;

		if (name === 'notfound') {
			pageInstance = new PageElement($('#app'));
		} else {
			pageInstance = new PageElement($('#content'), param || {});
		}

		pageInstance.render();
	},
};

export default router;
