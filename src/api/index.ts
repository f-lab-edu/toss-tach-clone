import type { ArticleList, ArticleData } from '@/types/ArticleTypes';
import ARTICLE_LIST from '@/mocks/article-list.json';
import ARTICLE from '@/mocks/article-body.json';

async function getArticles(): Promise<ArticleList> {
	try {
		const data = ARTICLE_LIST;
		return data;
	} catch (error) {
		throw new Error('Failed to fetch articles');
	}
}

async function getArticle(articleId: string): Promise<ArticleData> {
	try {
		const articleBody = ARTICLE[articleId];
		const article = ARTICLE_LIST.articles[articleId];
		if (!articleBody || !article) {
			throw new Error('Article not found');
		}
		return { body: articleBody, article: article };
	} catch (error) {
		throw new Error('Failed to fetch article');
	}
}

export { getArticles, getArticle };
