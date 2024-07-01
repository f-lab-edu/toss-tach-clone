import ARTICLE from '@/mocks/article-body.json';
import ARTICLE_LIST from '@/mocks/article-list.json';
import ArticlePage from '@/pages/ArticlePage.js';
import { formatDate } from '@/utils/dateFormat';
import { $ } from '@/utils/querySelector.js';

describe('Article', () => {
	let article;
	const articleId = '1';
	const searchParams = {};

	beforeEach(() => {
		document.body.innerHTML = '<div id="content"></div>';
		const $element = $('#content');
		article = new ArticlePage($element, articleId, searchParams);
		article.render();
	});

	test('기사 내용을 렌더링해야 합니다', () => {
		const $element = $('#content');
		const articleData = ARTICLE_LIST.articles[articleId];

		expect($element.innerHTML).toContain(articleData.title);
		expect($element.innerHTML).toContain(formatDate(articleData.created_date));
		expect($element.querySelector('.article-body').textContent).toContain(ARTICLE[articleId]);
	});

	test('이미지를 렌더링해야 합니다', () => {
		const $element = $('#content');
		const articleData = ARTICLE_LIST.articles[articleId];

		const img = $element.querySelector('img');
		expect(img.src).toContain(articleData.thumbnail_image);
		expect(img.alt).toBe('이미지');
	});
});
