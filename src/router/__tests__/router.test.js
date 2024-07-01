import { jest } from '@jest/globals';

import router from '@/router/router';
import { $ } from '@/utils/querySelector.js';

describe('Router', () => {
	let originalPushState;

	beforeEach(() => {
		document.body.innerHTML = '<div id="content"></div>';
		originalPushState = window.history.pushState;
		window.history.pushState = jest.fn((state, title, url) => {
			window.history.replaceState(state, title, url);
		});
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

	test('searchParams를 포함한 경로를 찾아야 합니다', () => {
		const route = router.findMatchingRoute('/articles/1', { ref: 'homepage' });
		expect(route.name).toBe('article');
		expect(route.param).toEqual({ id: '1', searchParams: { ref: 'homepage' } });
	});

	test('searchParams를 포함한 경로로 이동해야 합니다', () => {
		router.navigateTo('/articles/1?ref=homepage');
		expect(window.history.pushState).toHaveBeenCalled();
	});

	test('URL에 searchParams가 포함되어야 합니다', () => {
		router.navigateTo('/articles/1?ref=homepage');
		const url = new URL(window.location.href);
		const searchParams = Object.fromEntries(url.searchParams.entries());
		expect(searchParams).toEqual({ ref: 'homepage' });
	});
});
