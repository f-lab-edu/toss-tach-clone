// api/index.ts

import type { ArticleList, ArticleData } from '@/types/ArticleTypes';
import ARTICLE_LIST from '@/mocks/article-list.json';
import ARTICLE from '@/mocks/article-body.json';

// 콜백함수를 받아서 데이터를 반환하는 랩핑함수
async function apiRequest<T>(callback: () => Promise<T>): Promise<T> {
	try {
		const data = await callback();
		return data;
	} catch (error) {
		throw new Error(`Failed to fetch data: ${error instanceof Error ? error.message : error}`);
	}
}

async function getArticleById(): Promise<ArticleList> {
	return apiRequest(async () => {
		const data = ARTICLE_LIST;
		return data;
	});
}

async function getArticle(articleId: string): Promise<ArticleData> {
	return apiRequest(async () => {
		const articleContent = ARTICLE[articleId];
		const article = ARTICLE_LIST.articles[articleId];
		if (!articleContent || !article) {
			throw new Error('Article not found');
		}
		return { articleContent, article };
	});
}

export { getArticleById, getArticle };
