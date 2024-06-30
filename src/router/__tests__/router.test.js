import { jest } from '@jest/globals';

import router from '@/router/router';
import { $ } from '@/utils/querySelector.js';

describe('Router', () => {
	let originalPushState;

	beforeEach(() => {
		document.body.innerHTML = '<div id="content"></div>';
		originalPushState = window.history.pushState;
		window.history.pushState = jest.fn();
	});

	afterEach(() => {
		window.history.pushState = originalPushState;
	});

	test('일치하는 경로를 찾아야 합니다', () => {
		const route = router.findMatchingRoute('/');
		expect(route.name).toBe('home');
	});

	test('잘못된 경로에 대해 notfound 경로를 반환해야 합니다', () => {
		const route = router.findMatchingRoute('/invalid/path');
		expect(route.name).toBe('notfound');
	});

	test('경로로 이동해야 합니다', () => {
		const contentElement = $('#content');
		router.navigateTo('/articles/1');
		expect(window.history.pushState).toHaveBeenCalled();
		expect(contentElement).not.toBeNull();
	});
});
