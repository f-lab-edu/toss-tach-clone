// api/index.ts

import type { ArticleList, ArticleData } from '@/types/ArticleTypes';
import ARTICLE_LIST from '@/mocks/article-list.json';
import ARTICLE from '@/mocks/article-body.json';

// 콜백함수와 에러 핸들러를 받아서 데이터를 반환하는 랩핑함수
async function apiRequest<T>(
	callback: () => Promise<T>,
	errorHandler?: (error: Error) => void,
): Promise<T> {
	try {
		const data = await callback();
		return data;
	} catch (error) {
		const err = error instanceof Error ? error : new Error('Unknown error');
		if (errorHandler) {
			errorHandler(err);
		}
		throw new Error(`Failed to fetch data: ${err.message}`);
	}
}

async function getArticleById(errorHandler?: (error: Error) => void): Promise<ArticleList> {
	return apiRequest(async () => {
		const data = ARTICLE_LIST;
		return data;
	}, errorHandler);
}

async function getArticle(
	articleId: string,
	errorHandler?: (error: Error) => void,
): Promise<ArticleData> {
	return apiRequest(async () => {
		const articleContent = ARTICLE[articleId];
		const article = ARTICLE_LIST.articles[articleId];
		if (!articleContent || !article) {
			throw new Error('Article not found');
		}
		return { articleContent, article };
	}, errorHandler);
}

export { getArticleById, getArticle };
