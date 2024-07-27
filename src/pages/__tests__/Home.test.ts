import { jest } from '@jest/globals';

import router from '@/router/router';
import Home from '@/pages/Home';
import { $ } from '@/utils/querySelector';
import type { Article, ArticleList } from '@/types/ArticleTypes';
import { getArticleById } from '@/api';

describe('Home', () => {
	document.body.innerHTML = '<div id="content"></div>';
	const $element: HTMLElement = $('#content');
	const props = {};
	const home: Home = new Home($element, props);
	let originalNavigateTo;

	beforeEach(() => {
		originalNavigateTo = router.navigateTo;
		router.navigateTo = jest.fn();
	});

	afterEach(() => {
		router.navigateTo = originalNavigateTo;
	});

	home.render();
	test('기사 목록을 렌더링해야 합니다', () => {
		let articleList: ArticleList;

		const init = async (): Promise<void> => {
			articleList = await getArticleById();
			render(articleList);
		};
		init();

		const render = (articleList: ArticleList = { articles: {} }) => {
			Object.keys(articleList.articles).forEach((key) => {
				const article: Article = articleList.articles[key];

				expect($element.innerHTML).toContain(article.title);
				expect($element.innerHTML).toContain(article.summary);
				expect($element.innerHTML).toContain(article.thumbnail_image);
			});
		};
	});

	test('기사 항목 클릭 시 navigateTo가 호출되어야 합니다', () => {
		const listItem: HTMLElement = $element.querySelector('.list-group-item');
		listItem.click();

		expect(router.navigateTo).toHaveBeenCalled();
	});
});
