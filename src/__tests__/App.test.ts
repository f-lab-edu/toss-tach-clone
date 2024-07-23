import { jest } from '@jest/globals';

import App from '@/App';
import router from '@/router/router';
import { $ } from '@/utils/querySelector';

describe('App', () => {
	document.body.innerHTML = '<div id="app"></div>';
	const $element: HTMLElement = $('#app');
	let originalRoute;

	beforeEach(() => {
		originalRoute = router.route;
		router.route = jest.fn();
	});

	afterEach(() => {
		router.route = originalRoute;
	});

	test('초기화 및 렌더링이 올바르게 이루어져야 합니다', () => {
		const app: App = new App($element);

		expect(app.$element.innerHTML).toContain('main-header');
		expect(app.$element.innerHTML).toContain('content');
		expect(router.route).toHaveBeenCalled();
	});
});
