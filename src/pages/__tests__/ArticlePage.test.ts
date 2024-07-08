import { getArticle } from '@/api';
import ArticlePage from '@/pages/ArticlePage';
import type { RouteParam } from '@/types/RouterTypes';
import { formatDate } from '@/utils/dateFormat';
import { $ } from '@/utils/querySelector';

describe('ArticlePage', () => {
	const articleId: string = '1';
	const searchParams: URLSearchParams = new URLSearchParams();
	document.body.innerHTML = '<div id="content"></div>';
	const $element: HTMLElement = $('#content');

	beforeEach(() => {
		const params: RouteParam = { id: articleId, searchParams };
		new ArticlePage($element, params);
	});

	test('기사 내용을 렌더링해야 합니다', async () => {
		const { body, article } = await getArticle(articleId);

		expect($element.innerHTML).toContain(article.title);
		expect($element.innerHTML).toContain(formatDate(article.created_date));
		expect($element.querySelector('.article-body').textContent).toContain(body);
	});

	test('이미지를 렌더링해야 합니다', async () => {
		const { article } = await getArticle(articleId);

		const img: HTMLImageElement = $element.querySelector('img');
		expect(img.src).toContain(article.thumbnail_image);
		expect(img.alt).toBe('이미지');
	});
});
