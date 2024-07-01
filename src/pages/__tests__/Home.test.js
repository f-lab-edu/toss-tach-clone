import { jest } from '@jest/globals';

import ARTICLE_LIST from '@/mocks/article-list.json';
import router from '@/router/router';
import Home from '@/pages/Home.js';
import { $ } from '@/utils/querySelector.js';

beforeAll(() => {
	router.navigateTo = jest.fn();
});

describe('Home', () => {
	let home;
	let originalNavigateTo;

	beforeEach(() => {
		document.body.innerHTML = '<div id="content"></div>';
		const $element = $('#content');

		originalNavigateTo = router.navigateTo;
		router.navigateTo = jest.fn();

		home = new Home($element);
		home.render();
	});

	afterEach(() => {
		router.navigateTo = originalNavigateTo;
	});

	test('기사 목록을 렌더링해야 합니다', () => {
		const $element = $('#content');
		const articleList = ARTICLE_LIST.articles;

		Object.keys(articleList).forEach((key) => {
			const article = articleList[key];
			expect($element.innerHTML).toContain(article.title);
			expect($element.innerHTML).toContain(article.summary);
			expect($element.innerHTML).toContain(article.thumbnail_image);
		});
	});

	test('기사 항목 클릭 시 navigateTo가 호출되어야 합니다', () => {
		const $element = $('#content');
		const listItem = $element.querySelector('.list-group-item');
		listItem.click();

		expect(router.navigateTo).toHaveBeenCalled();
	});
});
