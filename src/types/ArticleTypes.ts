interface Article {
	thumbnail_image: string;
	title: string;
	summary: string;
	created_date: string;
}

interface ArticleById {
	[articleById: string]: Article;
}

interface ArticleList {
	articles: ArticleById;
}

interface ArticleData {
	article: Article;
	articleContent: string;
}

export { Article, ArticleById, ArticleList, ArticleData };
