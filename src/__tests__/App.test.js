import { jest } from '@jest/globals';

import App from '@/App.js';
import router from '@/router/router';
import { $ } from '@/utils/querySelector.js';

describe('App', () => {
	let originalRoute;

	beforeEach(() => {
		document.body.innerHTML = '<div id="app"></div>';
		originalRoute = router.route;
		router.route = jest.fn();
	});

	afterEach(() => {
		router.route = originalRoute;
	});

	test('초기화 및 렌더링이 올바르게 이루어져야 합니다', () => {
		const $element = $('#app');
		new App($element);

		expect($element.innerHTML).toContain('main-header');
		expect($element.innerHTML).toContain('content');
		expect(router.route).toHaveBeenCalled();
	});
});
