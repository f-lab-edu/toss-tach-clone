import { jest } from '@jest/globals';

import router from '@/router/router';
import Home from '@/pages/Home';
import { $ } from '@/utils/querySelector';
import type { Article, ArticleList } from '@/types/ArticleTypes';
import { getArticles } from '@/api';

describe('Home', () => {
	document.body.innerHTML = '<div id="content"></div>';
	const $element: HTMLElement = $('#content');
	const home: Home = new Home($element);
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

		const renderError = (errorMessage: string): void => {
			const html: string = `
		<div class="container d-flex flex-column">
			<p class="error-message">${errorMessage}</p>
		</div>`;
			$element.innerHTML = html;
		};

		const init = async (): Promise<void> => {
			try {
				articleList = await getArticles();
				render(articleList);
			} catch (error) {
				renderError(error.message);
			}
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