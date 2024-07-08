import { jest } from '@jest/globals';

import router from '@/router/router';
import { $ } from '@/utils/querySelector';
import type { Route } from '@/types/RouterTypes';
import Component from '@/core/Component';

// 필요한 라우트를 설정합니다
interface TestRoute extends Omit<Route, 'element'> {
	element: jest.Mocked<typeof Component>;
}

const testRoutes: TestRoute[] = [
	{
		path: '/',
		name: 'home',
		element: jest.fn() as jest.Mocked<typeof Component>,
	},
	{
		path: '/articles/:id',
		name: 'article',
		element: jest.fn() as jest.Mocked<typeof Component>,
	},
	{
		path: '/notfound',
		name: 'notfound',
		element: jest.fn() as jest.Mocked<typeof Component>,
	},
];

describe('Router', () => {
	(router as any).routes = testRoutes as Route[];
	let originalPushState: (state: any, title: string, url?: string | null | undefined) => void;

	beforeEach(() => {
		document.body.innerHTML = '<div id="content"></div>';
		originalPushState = window.history.pushState;
		window.history.pushState = jest.fn((state: any, title: string, url: string) => {
			window.history.replaceState(state, title, url);
		});
	});

	afterEach(() => {
		window.history.pushState = originalPushState;
	});

	test('일치하는 경로를 찾아야 합니다', () => {
		const route: Route = router.findMatchingRoute('/');
		expect(route.name).toBe('home');
	});

	test('잘못된 경로에 대해 notfound 경로를 반환해야 합니다', () => {
		const route: Route = router.findMatchingRoute('/invalid/path');
		expect(route.name).toBe('notfound');
	});

	test('경로로 이동해야 합니다', () => {
		const contentElement: HTMLElement = $('#content');
		router.navigateTo('/articles/1');
		expect(window.history.pushState).toHaveBeenCalled();
		expect(contentElement).not.toBeNull();
	});

	test('searchParams를 포함한 경로를 찾아야 합니다', () => {
		const queryParams: URLSearchParams = new URLSearchParams({ ref: 'homepage' });
		const route: Route = router.findMatchingRoute('/articles/1', queryParams);
		expect(route.name).toBe('article');
		if (route.param && route.param.searchParams) {
			const paramsObject = Object.fromEntries(route.param.searchParams.entries());
			expect(paramsObject).toEqual({ ref: 'homepage' });
		} else {
			fail('searchParams가 존재하지 않습니다');
		}
		expect(route.param.id).toBe('1');
	});

	test('searchParams를 포함한 경로로 이동해야 합니다', () => {
		router.navigateTo('/articles/1?ref=homepage');
		expect(window.history.pushState).toHaveBeenCalled();
	});

	test('URL에 searchParams가 포함되어야 합니다', () => {
		router.navigateTo('/articles/1?ref=homepage');
		const url: URL = new URL(window.location.href);
		const searchParams: { [k: string]: string } = Object.fromEntries(url.searchParams.entries());
		expect(searchParams).toEqual({ ref: 'homepage' });
	});
});
