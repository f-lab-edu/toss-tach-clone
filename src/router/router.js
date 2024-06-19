import { routes } from './routes';

import { $ } from '@/utils/querySelector';

const router = {
	findMatchingRoute(pathname) {
		let route = routes.find((route) => route.path.split('/')[1] === pathname.split('/')[1]);

		if (route && route.name === 'articles') {
			const id = pathname.split('/')[2];

			if (!id || id.trim() === '') {
				route = routes.find((route) => route.name === 'notfound');
			} else {
				route.param = { id };
			}
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
		const route = this.findMatchingRoute(window.location.pathname);
		if (route.name === 'notfound' && window.location.pathname !== '/notfound') {
			this.navigateTo('/notfound');
			return;
		}

		const page = route.page({ $target: $('#content'), param: route.param });
		page.render();
	},
};

export default router;
